// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVCJTxgkuc3QsD-XcPE3tnOpWCJRu_vxY",
  authDomain: "coffee-store-7f5b3.firebaseapp.com",
  projectId: "coffee-store-7f5b3",
  storageBucket: "coffee-store-7f5b3.firebasestorage.app",
  messagingSenderId: "919692737656",
  appId: "1:919692737656:web:db242ce9cfbe494459c18d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);
