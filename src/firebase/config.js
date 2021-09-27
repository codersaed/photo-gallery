import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5fqee1h61QY31OyK8j4kHerrhBl7sjX8",
    authDomain: "photo-gallery-reactjs.firebaseapp.com",
    projectId: "photo-gallery-reactjs",
    storageBucket: "photo-gallery-reactjs.appspot.com",
    messagingSenderId: "979450010932",
    appId: "1:979450010932:web:1141771bdcf2604daa5961",
    measurementId: "G-7ESFB2DH3B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
