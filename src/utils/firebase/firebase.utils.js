import { initializeApp } from "firebase/app";
// Authentication
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
// Firestore Database
import {
    collection, doc,
    getDoc,
    getDocs,
    getFirestore,
    query,
    setDoc, writeBatch
} from "firebase/firestore";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// Firestore DB
export const db = getFirestore(firebaseApp);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log("Done...");
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    // if user data doesnt exist
    if (!userSnapshot.exists()) {
        // create / set the document with the data from the userAuth in the collection
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo,
            })
        } catch (error) {
            console.error(error.message);
        }
    }

    // if user data exists 
    // return the userDocRef
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
