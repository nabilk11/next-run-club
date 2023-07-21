

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCioFK25UotdjevNjZ7QhOqA05ki8ZJ31o",
  authDomain: "runjida-34785.firebaseapp.com",
  projectId: "runjida-34785",
  storageBucket: "runjida-34785.appspot.com",
  messagingSenderId: "197822458508",
  appId: "1:197822458508:web:0845a1135ed1f4b96a29a9",
  measurementId: "G-P2E243BGKS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);