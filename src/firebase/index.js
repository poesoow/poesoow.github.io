/* 8버전 스타일 */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: "yapdiv-contact",
  storageBucket: "yapdiv-contact.appspot.com",
  messagingSenderId: "552811108923",
  appId: process.env.VUE_APP_APPID ,
  measurementId: "G-CKS71XB0WS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };