import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyClldAY-UbvLyyqiYyb1_mdCLCLGuESQjI',
  authDomain: 'e-commerce-26884.firebaseapp.com',
  projectId: 'e-commerce-26884',
  storageBucket: 'e-commerce-26884.appspot.com',
  messagingSenderId: '411516063188',
  appId: '1:411516063188:web:6579769ca074bb775a5a41',
};

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export enum ProviderType {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
}

export { firebaseConfig, googleProvider, facebookProvider };
