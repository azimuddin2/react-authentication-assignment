// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIczsLIAcT-gY4lR-BrQpZUaOeXz-di34",
  authDomain: "react-auth-assignment-8f6a2.firebaseapp.com",
  projectId: "react-auth-assignment-8f6a2",
  storageBucket: "react-auth-assignment-8f6a2.appspot.com",
  messagingSenderId: "166507830686",
  appId: "1:166507830686:web:2ca3f0df817e8056c5ca8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;