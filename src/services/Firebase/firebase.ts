import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import fireAuth from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyClldAY-UbvLyyqiYyb1_mdCLCLGuESQjI',
  authDomain: 'e-commerce-26884.firebaseapp.com',
  projectId: 'e-commerce-26884',
  storageBucket: 'e-commerce-26884.appspot.com',
  messagingSenderId: '411516063188',
  appId: '1:411516063188:web:6579769ca074bb775a5a41',
};

firebase.initializeApp(firebaseConfig);

// request to the backend

export default firebase;
