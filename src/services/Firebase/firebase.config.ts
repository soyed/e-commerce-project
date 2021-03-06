import { GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBDJMz45rHQJT8DvWnuNe0KGxVNaju5nfk',
  authDomain: 'e-commerce-ea348.firebaseapp.com',
  projectId: 'e-commerce-ea348',
  storageBucket: 'e-commerce-ea348.appspot.com',
  messagingSenderId: '467960020405',
  appId: '1:467960020405:web:8350691226a7dc4863edfc',
  measurementId: 'G-03TEHPW5HJ',
};

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export enum ProviderType {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
}

export { firebaseConfig, googleProvider, facebookProvider };

// apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
