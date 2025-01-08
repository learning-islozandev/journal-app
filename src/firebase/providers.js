import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }
    } catch (error) {

        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = `${errorCode}: ${error.message}`;

        return {
            ok: false,
            errorMessage
        }
    }
}


const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const user = result.user;
        await updateProfile(user, { displayName });
        return {
            ok: true,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid
        }
    } catch (error) {
        return {
            ok: false,
            errorMessage: error.message
        }
    }
}


export {
    signInWithGoogle,
    registerUserWithEmailPassword
}