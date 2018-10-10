import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBo_879dQPMx-SUdDYst_nz2RioV4RCqnM",
    authDomain: "portfolio-1df5e.firebaseapp.com",
    databaseURL: "https://portfolio-1df5e.firebaseio.com",
    projectId: "portfolio-1df5e",
    storageBucket: "portfolio-1df5e.appspot.com",
    messagingSenderId: "484376494053"
  };
  firebase.initializeApp(config);
console.log("start your engines!");

export default firebase