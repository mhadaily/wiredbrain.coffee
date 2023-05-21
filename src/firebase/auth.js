import {
  TwitterAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from './firebase';
import { getUserDocAndSetAdmin } from '../firebase/firestore';

export function signUpWithEmailPassword({ email, password }) {
  createUserWithEmailAndPassword(auth, email, password);
}

export function loginWithEmailPassword({ email, password }) {
  signInWithEmailAndPassword(auth, email, password);
}

export function SignInWithTwitter() {
  signInWithRedirect(auth, new TwitterAuthProvider());
}

export function forgotPassword(email) {
  sendPasswordResetEmail(auth, email);
}

export function onAuthChange(setCurrentUser, setIsAdmin) {
  return onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
    getUserDocAndSetAdmin(setIsAdmin);
  });
}

export function signOut() {
  auth.signOut();
}
