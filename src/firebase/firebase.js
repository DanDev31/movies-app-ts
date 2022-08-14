// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4pmVgLedkJEASm5zfdR7AQq8P9c6tAjg",
  authDomain: "movie-app-6c39b.firebaseapp.com",
  projectId: "movie-app-6c39b",
  storageBucket: "movie-app-6c39b.appspot.com",
  messagingSenderId: "710563436891",
  appId: "1:710563436891:web:78ea3e95b7b6df59ace27e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);