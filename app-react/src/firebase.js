import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3Pjrwvc8F08y4ZVVh3M56-wSIf8RtzC4",
    authDomain: "fir-react-c5a59.firebaseapp.com",
    projectId: "fir-react-c5a59",
    storageBucket: "fir-react-c5a59.firebasestorage.app",
    messagingSenderId: "585727963301",
    appId: "1:585727963301:web:8c8a4da66148c7774fdd4c",
    measurementId: "G-RRSC76CC6B"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
