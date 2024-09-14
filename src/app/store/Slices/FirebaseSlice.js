import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../firebase';
import {
    signInWithEmailAndPassword,
    sendEmailVerification,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';


const initialState = {
    user: null,
    loading: false,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});

export const { setLoading, setUser, setError, clearError } = authSlice.actions;

export const login = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const SignUp = (email, password) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch(setUser(userCredential.user));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const SendVerification = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const userCredential = sendEmailVerification(auth.currentUser);
        dispatch(setUser(userCredential.user));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const googleSignin = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const userCredential = await signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                console.log(errorCode, errorMessage, email);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        dispatch(setUser(userCredential.user));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export const logout = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        await signOut(auth);
        dispatch(setUser(null));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default authSlice.reducer;
