import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Starting search!');
    console.log(searchTerm);
    if(!searchTerm)
      searchTerm = null;
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 30,
          // term: 'volunteer',
          location: 'toronto',
          term: searchTerm,
          categories: 'nonprofit, All'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log('Something went wrong...');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  useEffect(() => {
    searchApi('');
    results
  }, []);

  return [searchApi, results, errorMessage];
};
