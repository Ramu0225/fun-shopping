import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCat3rbdtB8Fzhixd6aZsGlfbsVQhCrOvY",
    authDomain: "funshop-db.firebaseapp.com",
    projectId: "funshop-db",
    storageBucket: "funshop-db.appspot.com",
    messagingSenderId: "1075905182950",
    appId: "1:1075905182950:web:ab7381277932d5d611cf27",
    measurementId: "G-ZCXZ4CZ7HG"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
