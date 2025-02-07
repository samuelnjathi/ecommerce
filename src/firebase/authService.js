import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    GoogleAuthProvider,
    signInWithPopup
  } from "firebase/auth";
import { auth } from "./firebase";


export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
} 

export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}
export const logout = () => {
    return signOut(auth)
}