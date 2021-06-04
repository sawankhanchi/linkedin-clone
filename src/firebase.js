import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6KhazVpPXqzu5DbpMVRcjKsOlwTsSvZA",
    authDomain: "linkedin-clone-8dfed.firebaseapp.com",
    projectId: "linkedin-clone-8dfed",
    storageBucket: "linkedin-clone-8dfed.appspot.com",
    messagingSenderId: "154730500993",
    appId: "1:154730500993:web:ef88d66f15ac979ef28e80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
