import { useState } from "react";
import {
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopUp
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, ButtonsContainer } from './sign-in-form.styles.jsx';


const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const SignInWithGoogle = async () => {
        const { user } = await signInWithGooglePopUp();
        // setCurrentUser(user);
        await createUserDocumentFromAuth(user);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value,
        })
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            // Adding to Context
            // setCurrentUser(user);
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert("Incorrect password for email");
                    break;
                case 'auth/user-not-found':
                    alert("No user associated with this email");
                    break;
                default:
                    console.log(error);


            }

            if (error.code === 'auth/wrong-password') {
            }
            if (error.code === 'auth/user-not-found') {
            }
            console.error(error);
        }
    }

    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <span>Sign In with Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                    <Button
                        type="button"
                        buttonType={BUTTON_TYPE_CLASSES.google}
                        onClick={SignInWithGoogle}>
                        Google Sign in
                    </Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;