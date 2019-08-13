import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyBsRp-7NMYv_yDTZykyAvlRcCZhDPxrnuw",
        authDomain: "crwn-db-fe4ec.firebaseapp.com",
        databaseURL: "https://crwn-db-fe4ec.firebaseio.com",
        projectId: "crwn-db-fe4ec",
        storageBucket: "",
        messagingSenderId: "404520154660",
        appId: "1:404520154660:web:39852776cbe58cc4"
      
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;