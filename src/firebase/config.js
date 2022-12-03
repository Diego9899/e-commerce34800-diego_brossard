// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACEzFA6x7f49-oWYZBRgaYMWhnSbjLG-I",
  authDomain: "ecommerce-34800.firebaseapp.com",
  projectId: "ecommerce-34800",
  storageBucket: "ecommerce-34800.appspot.com",
  messagingSenderId: "806380568954",
  appId: "1:806380568954:web:6014ca2332e3c08c2f16c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestore = () => app