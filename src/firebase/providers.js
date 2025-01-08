import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
}
    from "firebase/auth";

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
        const { uid, photoURL } = result.user;
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = `${errorCode}: ${error.message}`;
        return {
            ok: false,
            errorMessage
        }
    }
}

const loginWithEmailPassword = async ({ email, password }) => {
    try {
        
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = result.user;
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = `${errorCode}: ${error.message}`;
        return {
            ok: false,
            errorMessage
        }
    }
}

export {
    signInWithGoogle,
    registerUserWithEmailPassword,
    loginWithEmailPassword
}