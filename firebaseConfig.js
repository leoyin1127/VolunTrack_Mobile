import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
import {addDoc} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyALVYJaT3Q-tWD_j2VVDTI2o-JS0g_ah-Y",
    authDomain: "volun-track.firebaseapp.com",
    projectId: "volun-track",
    storageBucket: "volun-track.appspot.com",
    messagingSenderId: "348051927128",
    appId: "1:348051927128:web:30169cf42d5053de5c1a2d",
    measurementId: "G-WDQ5PPH1ZJ"
};


const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export {app}
