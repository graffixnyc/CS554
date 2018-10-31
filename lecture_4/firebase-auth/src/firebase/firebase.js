import firebase from "firebase/app"
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5NTzPt5qhpHN7Vn9bcXZeZY6X0GN1TS8",
    authDomain: "react-firebase-auth-74fd9.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-74fd9.firebaseio.com",
    projectId: "react-firebase-auth-74fd9",
    storageBucket: "react-firebase-auth-74fd9.appspot.com",
    messagingSenderId: "930336099649"
  };
 
firebase.initializeApp(config);


const auth = firebase.auth();

 function isAuthenticated () {
  return !!auth.currentUser;
};
export {auth,firebase,isAuthenticated}