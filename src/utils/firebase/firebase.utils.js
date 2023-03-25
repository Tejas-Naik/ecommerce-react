import { initializeApp } from "firebase/app";
// Authentication
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from 'firebase/auth';
// Firestore Database
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmQgWC3ZYE0czTM1H8TtKUvQQQxP05-Jk",
    authDomain: "crwn-clothing-db-94dfc.firebaseapp.com",
    projectId: "crwn-clothing-db-94dfc",
    storageBucket: "crwn-clothing-db-94dfc.appspot.com",
    messagingSenderId: "688591319593",
    appId: "1:688591319593:web:58b8a2b943c3f25b19e238"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Authentication
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

// Firestore DB
export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // const docRef = await addDoc(collection(db, "users"), {
    //             displayName: response.user.displayName,
    //             email: response.user.email,
    //             createdAt: new Date(),
    //         });

    //         console.log("Document written with ID: ", docRef.id);
}