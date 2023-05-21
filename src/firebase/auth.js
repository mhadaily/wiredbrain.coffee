import {
  TwitterAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithRedirect,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from './firebase';

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

export function onAuthChange(setCurrentUser) {
  return onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });
}

export function signOut() {
  auth.signOut();
}
