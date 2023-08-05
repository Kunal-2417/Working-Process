import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDuqbdq5XCdaUgfDL451D0gGuXdsA5_Abk",
  authDomain: "otp-project-e8d41.firebaseapp.com",
  projectId: "otp-project-e8d41",
  storageBucket: "otp-project-e8d41.appspot.com",
  messagingSenderId: "15422465746",
  appId: "1:15422465746:web:144c7ae375713641326f0b",
  measurementId: "G-7EQGNPRF83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
