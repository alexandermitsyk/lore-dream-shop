import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBUK-eFT7tCnS1aTixXemyuP596-l-mf6c",
    authDomain: "lore-db.firebaseapp.com",
    databaseURL: "https://lore-db.firebaseio.com",
    projectId: "lore-db",
    storageBucket: "lore-db.appspot.com",
    messagingSenderId: "279747153831",
    appId: "1:279747153831:web:c37e4e74e33b08a9513082",
    measurementId: "G-PG2FEKYSWX"
};

firebase.initializeApp(config);

export const auth = firebase.auth();  
export const firestore = firebase.firestore();

const google = new firebase.auth.GoogleAuthProvider();
google.setCustomParameters({prompt: 'select_account'});

const facebook = new firebase.auth.FacebookAuthProvider();
facebook.setCustomParameters({display: 'popup'});

export const signInWithGoogle = () => auth.signInWithPopup(google);
export const signInWithFacebook = () => auth.signInWithPopup(facebook);

export default firebase;