import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBLhjj42W6ouwCApSlx8s7Xtc4X2vazVRc",
    authDomain: "crwn-db-86da8.firebaseapp.com",
    projectId: "crwn-db-86da8",
    storageBucket: "crwn-db-86da8.appspot.com",
    messagingSenderId: "735573079792",
    appId: "1:735573079792:web:4cadc27a4a8d98f66c7435",
    measurementId: "G-F4SV421E70"
  };

export const createUserProfileDocument = async (userAuth,addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...addtionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);

    }

  }

  return userRef;



}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;








































































