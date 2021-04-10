import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDNPQAp843lZ5NiFXhip127wZh7vaW913Q",
    authDomain: "linkedin-338f6.firebaseapp.com",
    projectId: "linkedin-338f6",
    storageBucket: "linkedin-338f6.appspot.com",
    messagingSenderId: "931382752237",
    appId: "1:931382752237:web:91aec04cfb3815f15cade4",
    measurementId: "G-7XXS6W7KRE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth };



