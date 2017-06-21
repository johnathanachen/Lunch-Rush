import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCZP_CMo8IhmnTSzuVRSmabYtywMdgG27w",
  authDomain: "lunch-rush-react.firebaseapp.com",
  databaseURL: "https://lunch-rush-react.firebaseio.com",
  projectId: "lunch-rush-react",
  storageBucket: "lunch-rush-react.appspot.com",
  messagingSenderId: "681680049807"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
