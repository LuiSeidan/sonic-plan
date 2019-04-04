import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyC0Yqh2xKjYI6VgQkYV90dfkGaOf8AgO20",
  authDomain: "sonic-plan-e1867.firebaseapp.com",
  databaseURL: "https://sonic-plan-e1867.firebaseio.com",
  projectId: "sonic-plan-e1867",
  storageBucket: "sonic-plan-e1867.appspot.com",
  messagingSenderId: "694671089019"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
