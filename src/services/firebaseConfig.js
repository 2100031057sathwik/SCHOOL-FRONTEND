// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your Firebase config...
  apiKey: "AIzaSyAslqBA90K-HUTWAyROf7zelbqnEQpMRPA",
  authDomain: "school-89f2f.firebaseapp.com",
  projectId: "school-89f2f",
  storageBucket: "school-89f2f.appspot.com",
  messagingSenderId: "268074584802",
  appId: "1:268074584802:web:d2c3918344821e77b26cbb",
  measurementId: "G-7ZF4H15F6W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, firebaseConfig }; // Export firebaseConfig as well
