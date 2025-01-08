import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
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

const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName });

        if (ok) {
            dispatch(login({ uid, email, displayName, photoURL }));
        } else {
            dispatch(logout({ errorMessage }));
        }
    }
}

const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, displayName, errorMessage } = await loginWithEmailPassword({ email, password });
        if (ok) {
            dispatch(login({ uid, email, displayName, photoURL }));
        } else {
            dispatch(logout({ errorMessage }));
        }
    }
}

export {
    checkingAuthentication,
    startGoogleSignIn,
    startCreatingUserWithEmailPassword,
    startLoginWithEmailPassword
}