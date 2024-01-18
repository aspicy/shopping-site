import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';

import { 
    getFirestore, 
    doc, 
    getDoc, 
    setDoc 
} from 'firebase/firestore';


// App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMNilD1ZE6_Tim8X6eDsi1KELMF9mN7-s",
    authDomain: "shopping-site-db-add52.firebaseapp.com",
    projectId: "shopping-site-db-add52",
    storageBucket: "shopping-site-db-add52.appspot.com",
    messagingSenderId: "737763500337",
    appId: "1:737763500337:web:5cf60791ffcac881f25010"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating th use', error.message)
        }
    }

    return userDocRef;
}