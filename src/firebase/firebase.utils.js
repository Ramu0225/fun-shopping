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

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exist){
        const {displayName, email }= userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log('error creating user', error.message);

        }
        return userRef;
    }
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
