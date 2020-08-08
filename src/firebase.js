import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
//Copy Credentials from your firebase project
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth }
