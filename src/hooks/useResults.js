import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async function searchTerm (term) {
    console.log('Starting search!');
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 30,
          // term: 'volunteer',
          location: 'toronto',
          // term: searchTerm,
          categories: 'nonprofit, All',
          //with yelp api search query
          term: term
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      console.log('Something went wrong...');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
