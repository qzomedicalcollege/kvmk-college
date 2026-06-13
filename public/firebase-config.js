/*
   firebase-config.js
   Firebase v8 client initialization. Sets global db and auth variables.
   Safe for local double-clicking (file:// protocol) and GitHub Pages.
*/

const firebaseConfig = {
  apiKey: "AIzaSyACmuiEhomw-KWaZlbXlU-gNkLvOK9ttn8",
  authDomain: "kvmk-college.firebaseapp.com",
  projectId: "kvmk-college",
  storageBucket: "kvmk-college.firebasestorage.app",
  messagingSenderId: "1079481248338",
  appId: "1:1079481248338:web:5a97881773aa2774d0cd8b",
  measurementId: "G-XRQQXYGKWP"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();
