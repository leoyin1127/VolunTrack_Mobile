import { useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import yelp from '../api/yelp';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALVYJaT3Q-tWD_j2VVDTI2o-JS0g_ah-Y",
  authDomain: "volun-track.firebaseapp.com",
  projectId: "volun-track",
  storageBucket: "volun-track.appspot.com",
  messagingSenderId: "348051927128",
  appId: "1:348051927128:web:30169cf42d5053de5c1a2d",
  measurementId: "G-WDQ5PPH1ZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      // Initialize Firebase and Firestore
      const db = getFirestore(app);

      // Firestore query
      const resultsCol = collection(db, 'Volunteer');
      const firestoreSnapshot = await getDocs(resultsCol);
      const firestoreData = firestoreSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        source: 'Firestore' // Tag to identify the source
      }));

      // Yelp API call
      const yelpResponse = await yelp.get('/search', {
        params: {
          location: 'canada',
          term: searchTerm + ' volunteer',
          categories: 'Volunteer',
          sort_by: 'best_match',
          limit: 20
        }
      });
      const yelpData = yelpResponse.data.businesses.map(business => ({
        ...business,
        source: 'Yelp' // Tag to identify the source
      }));

      // Merge Firestore and Yelp results
      const combinedResults = [...firestoreData, ...yelpData];
      setResults(combinedResults);
    } catch (error) {
      console.error('Error during search:', error);
      setErrorMessage('Something went wrong...');
    }
  };

  return [searchApi, results, errorMessage];
};