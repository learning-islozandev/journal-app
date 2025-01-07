import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./";

const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}


const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();
        if (result.ok) {
            dispatch(checkingCredentials(result));
        } else {
            dispatch(checkingCredentials(result));
        }
    }
}

export {
    checkingAuthentication,
    startGoogleSignIn
}