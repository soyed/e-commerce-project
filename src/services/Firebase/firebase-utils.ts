import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseApp = initializeApp(firebaseConfig);
// analytics
const analytics = getAnalytics(firebaseApp);

const firestore = getFirestore();

const firebaseAuth = getAuth();

export { firestore, firebaseApp, firebaseAuth, analytics };
