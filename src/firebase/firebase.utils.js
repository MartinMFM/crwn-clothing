import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyByFp2uy_i4SqTdU_qFOPz-SmGhvi6AxzA",
    authDomain: "crwn-db-c56f4.firebaseapp.com",
    projectId: "crwn-db-c56f4",
    storageBucket: "crwn-db-c56f4.appspot.com",
    messagingSenderId: "734516501942",
    appId: "1:734516501942:web:cf92b49b44f32e52bef517",
    measurementId: "G-KZKCSEZYRQ"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;