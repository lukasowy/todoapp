import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDi4O1zOUAAH3qZwHi6ly2Znh615LvnF-8",
    authDomain: "lukasplan-3e0a1.firebaseapp.com",
    databaseURL: "https://lukasplan-3e0a1.firebaseio.com",
    projectId: "lukasplan-3e0a1",
    storageBucket: "lukasplan-3e0a1.appspot.com",
    messagingSenderId: "565988510617"
  };
  
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;