// create user email and password
import { firebaseAuth } from './firebase-utils';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  linkWithRedirect,
  linkWithPopup,
} from 'firebase/auth';
import { facebookProvider, googleProvider } from './firebase.config';

// In your apps, the recommended way to know the auth status of your user is to set an observer on the Auth object. You can then get the user's basic profile information from the User object.

export const createNewUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    console.log(userCredential.user);
  } catch (error) {
    console.log(error);
  }
};

export const authenticateExistingUser = (email: string, password: string) => {
  signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {})
    .catch((error) => {
      console.log(error);
    });
};

export const signOutUser = async () => {
  try {
    await signOut(firebaseAuth);
    // send success message
  } catch (error) {
    console.log(error);
    // send error message as well
  }
};

// sign-in with third party authentication providers
