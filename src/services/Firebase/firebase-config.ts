import firebase from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyClldAY-UbvLyyqiYyb1_mdCLCLGuESQjI',
  authDomain: 'e-commerce-26884.firebaseapp.com',
  projectId: 'e-commerce-26884',
  storageBucket: 'e-commerce-26884.appspot.com',
  messagingSenderId: '411516063188',
  appId: '1:411516063188:web:6579769ca074bb775a5a41',
};

firebase.initializeApp(firebaseConfig);

const firestore = getFirestore();

addDoc(collection(firestore, 'users'), { testing: '123' })
  .then((res) => console.log(res))
  .catch((error) => console.log(error));

// request to the backend

export default firebase;
