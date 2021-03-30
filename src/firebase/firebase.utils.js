import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG = {
	apiKey: 'AIzaSyDoapAAU5Ijir5BTe5maLpPRnv_-O57f8g',
	authDomain: 'crwn-db-3ba81.firebaseapp.com',
	projectId: 'crwn-db-3ba81',
	storageBucket: 'crwn-db-3ba81.appspot.com',
	messagingSenderId: '3086801618',
	appId: '1:3086801618:web:8a6293dbe278d254056b0b',
	measurementId: 'G-VHTWNTPH3C'
};

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters( { prompt: 'select_account' } );
export const signInWithGoogle = () => auth.signInWithPopup( provider );

export default firebase;