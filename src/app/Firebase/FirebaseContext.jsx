import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId
  };

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

export const FirebaseAuth = getAuth(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirbaseProvider = (props) => {

    const signinWithGoogle = () => {
        signInWithPopup(FirebaseAuth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const CreateUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(FirebaseAuth, email, password).then((value) => { console.log(value) }).catch((error) => {
            sendEmailVerification(FirebaseAuth.currentUser);
            console.log(FirebaseAuth.currentUser);
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    }

    const SignInWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(FirebaseAuth, email, password).then((val) => {
            console.log(val, "login successful")
        }).catch((err) => alert("Invalid Login Credentials!"))
    }

    const SignOut = () => {
        signOut(FirebaseAuth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const Verification = () => {
        sendEmailVerification(FirebaseAuth.currentUser);
    }

    const ResetPassword = async(email) => {
        try {
            await sendPasswordResetEmail(FirebaseAuth, email);
            alert("Password reset email sent!");
          } catch (error) {
            console.log(error.message);
          }
    }

    return <FirebaseContext.Provider value={{ CreateUserWithEmailAndPassword, SignInWithEmailAndPassword, signinWithGoogle, SignOut, Verification, ResetPassword }}>
        {props.children}
    </FirebaseContext.Provider>
}
