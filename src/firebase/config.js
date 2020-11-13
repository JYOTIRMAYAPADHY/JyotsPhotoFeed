import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCpzCIvXgMGnVZWFBwWJG_yy3sIeu8tvXw",
    authDomain: "jyotsfeed.firebaseapp.com",
    databaseURL: "https://jyotsfeed.firebaseio.com",
    projectId: "jyotsfeed",
    storageBucket: "jyotsfeed.appspot.com",
    messagingSenderId: "606204794695",
    appId: "1:606204794695:web:8fd790566e63fd459e1e62"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
