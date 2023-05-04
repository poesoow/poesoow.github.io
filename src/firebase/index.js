/* 8버전 스타일 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCrq1_rWEpZdoPT3R1XH1TSI1wtHzVQjz8",
  authDomain: "yapdiv-contact.firebaseapp.com",
  projectId: "yapdiv-contact",
  storageBucket: "yapdiv-contact.appspot.com",
  messagingSenderId: "552811108923",
  appId: "1:552811108923:web:27613493f897edc3ea9a1e",
  measurementId: "G-CKS71XB0WS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };