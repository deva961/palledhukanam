// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKf9LlyS-ywYVDC15JLlyOAgLjKLDF2Zo",
  authDomain: "palledhukanam.firebaseapp.com",
  projectId: "palledhukanam",
  storageBucket: "palledhukanam.appspot.com",
  messagingSenderId: "49517389433",
  appId: "1:49517389433:web:98f63611e0d6f4cc9016a8",
  measurementId: "G-6EHX4T6R7Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);