import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';
import { fetchAndActivate, getRemoteConfig } from 'firebase/remote-config';

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const remoteConfig = getRemoteConfig(app);
export const isRemoteConfigActivated = fetchAndActivate(remoteConfig);
