import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";

import { auth, createUserDocumentFromAuth, signInWithGooglePopUp, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    useEffect(() => {
        const fetchData = async () => {
            const response = await getRedirectResult(auth);
            console.log(response);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        }
        fetchData();
    }, [])

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopUp();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign In With Google PopUp</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
        </div>
    )
}

export default SignIn;