import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBtYDCd1E2EYEyxw1WhhG1X4EDW9euF0qY",
    authDomain: "e-clone-6fdae.firebaseapp.com",
    databaseURL: "https://e-clone-6fdae.firebaseio.com",
    projectId: "e-clone-6fdae",
    storageBucket: "e-clone-6fdae.appspot.com",
    messagingSenderId: "918597050689",
    appId: "1:918597050689:web:7e0bbfdfe40fe79843c1c0",
    measurementId: "G-HDJZD6VX64"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }