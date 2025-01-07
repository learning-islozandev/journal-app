import { signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

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
            dispatch(login(result));
        } else {
            dispatch(logout(result.errorMessage));
        }
    }
}

export {
    checkingAuthentication,
    startGoogleSignIn
}