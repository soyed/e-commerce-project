import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase.config';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseApp = initializeApp(firebaseConfig);

const firestore = getFirestore();

const firebaseAuth = getAuth();

export { firestore, firebaseApp, firebaseAuth };
