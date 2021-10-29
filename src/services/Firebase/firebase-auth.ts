// create user email and password
import { firebaseAuth } from './firebase-utils';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  linkWithRedirect,
  linkWithPopup,
  AuthProvider,
  UserCredential,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth';
import {
  facebookProvider,
  googleProvider,
  ProviderType,
} from './firebase.config';

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
    .then((userCredential) => {
      console.log(userCredential.user);
    })
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

// managing users with firebase

// sign-in with third party authentication providers
export const thirdPartySignUp = async (providerType: ProviderType) => {
  try {
    const provider =
      providerType === ProviderType.GOOGLE ? googleProvider : facebookProvider;
    const linkUser = await linkWithPopup(firebaseAuth.currentUser, provider);
  } catch (error) {}
};

export const getThirdPartyRedirectResult = async (provider: ProviderType) => {
  try {
    const result = await getRedirectResult(firebaseAuth);
    const credential =
      provider === ProviderType.GOOGLE
        ? GoogleAuthProvider.credentialFromResult(result)
        : FacebookAuthProvider.credentialFromResult(result);

    console.log(credential);
  } catch (error) {
    console.log(error);
  }
};
