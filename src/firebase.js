import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDOIrksmYzHyI5gM3JfdCAlWPM0Qc9z_LQ",
  authDomain: "lunch-rush-21ecf.firebaseapp.com",
  databaseURL: "https://lunch-rush-21ecf.firebaseio.com",
  projectId: "lunch-rush-21ecf",
  storageBucket: "lunch-rush-21ecf.appspot.com",
  messagingSenderId: "909043662108"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
