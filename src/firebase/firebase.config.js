// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrAb4nMPjy0XjhQasamOqyzmexbQujVMU",
  authDomain: "mini-project-with-auth.firebaseapp.com",
  projectId: "mini-project-with-auth",
  storageBucket: "mini-project-with-auth.appspot.com",
  messagingSenderId: "198685549583",
  appId: "1:198685549583:web:d26565bd3e41cdf1012f7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;