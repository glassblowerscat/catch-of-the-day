import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp(
  {
    apiKey: "AIzaSyA-9nBrSCO1aAk7B9MSfyikleNI79sWT7w",
    authDomain: "catch-of-the-day-r-elainska.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-r-elainska.firebaseio.com"
  }
);

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;