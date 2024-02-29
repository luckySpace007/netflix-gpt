// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByHEv1daLWVzS-6olbR9u-_0EWNiEGNHU",
  authDomain: "netflix-gpt-b2e2f.firebaseapp.com",
  projectId: "netflix-gpt-b2e2f",
  storageBucket: "netflix-gpt-b2e2f.appspot.com",
  messagingSenderId: "622185321490",
  appId: "1:622185321490:web:3faeeb18d15a5e9958b4cb",
  measurementId: "G-9VE72N0BTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();