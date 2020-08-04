import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: "chaskis20.firebaseapp.com",
  databaseURL: "https://chaskis20.firebaseio.com",
  projectId: "chaskis20",
  storageBucket: "chaskis20.appspot.com",
  messagingSenderId: process.env.VUE_APP_FIREBASE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: "G-9HVF3VYB81",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = app
  .storage()
  .ref()
  .child("chaskis");

export { storage };
