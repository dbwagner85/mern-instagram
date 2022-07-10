import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDggQ-yTef1bV1LfXeTTDV1N0j83CZDcb8",
  authDomain: "mern-instagram-be070.firebaseapp.com",
  databaseURL: "https://mern-instagram-be070-default-rtdb.firebaseio.com",
  projectId: "mern-instagram-be070",
  storageBucket: "mern-instagram-be070.appspot.com",
  messagingSenderId: "947244302889",
  appId: "1:947244302889:web:b87c941e92df3cf61b5238"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
