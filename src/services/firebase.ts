import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDDDKQ3vsv_oJqAT3AzNCKfHyqDHZOmVvI",
  appId: "1:353057723010:web:abc0e14dfc71ffe7",
  authDomain: "instacool-2307a.firebaseapp.com",
  databaseURL: "https://instacool-2307a.firebaseio.com",
  messagingSenderId: "353057723010",
  projectId: "instacool-2307a",
  storageBucket: "instacool-2307a.appspot.com"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const storage = firebase.storage();
