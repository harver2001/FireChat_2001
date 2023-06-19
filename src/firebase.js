import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC2Wle0__7mIJGNcFNfZF3SrHgF56DX3uo",
    authDomain: "firstproject-caa98.firebaseapp.com",
    projectId: "firstproject-caa98",
    storageBucket: "firstproject-caa98.appspot.com",
    messagingSenderId: "944331146145",
    appId: "1:944331146145:web:1cf0b0813b6ca892b901e0"
}).auth();