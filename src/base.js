import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC_BThCVwCkzTDDZAjb8HGN58p-a5NczPk",
  authDomain: "catch-of-the-day-2-b5b28.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-2-b5b28-default-rtdb.firebaseio.com",
  projectId: "catch-of-the-day-2-b5b28",
  storageBucket: "catch-of-the-day-2-b5b28.appspot.com",
  messagingSenderId: "475601406441",
  appId: "1:475601406441:web:033643ab7545fe6ac3e378"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;