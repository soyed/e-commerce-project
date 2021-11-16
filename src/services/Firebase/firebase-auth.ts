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
  linkWithCredential,
  getRedirectResult,
  GoogleAuthProvider,
  FacebookAuthProvider,
  EmailAuthProvider,
  EmailAuthCredential,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  facebookProvider,
  googleProvider,
  ProviderType,
} from './firebase.config';

// In your apps, the recommended way to know the auth status of your user is to set an observer on the Auth object. You can then get the user's basic profile information from the User object.

export const createNewUser = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return createUserWithEmailAndPassword(firebaseAuth, email, password);
};

export const getCurrentUser = () => {
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
    } else {
    }
  });
};

export const authenticateWithPasswordAndEmail = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(firebaseAuth, email, password);
};

export const signOutUser = () => {
  return signOut(firebaseAuth);
};

// managing users with firebase

// sign-in with third party authentication providers
export const authenticateWithThirdParty = (providerType: ProviderType) => {
  const provider =
    providerType === ProviderType.GOOGLE ? googleProvider : facebookProvider;

  return linkWithPopup(firebaseAuth.currentUser, provider);
};

export const getThirdPartyRedirectResult = async (provider: ProviderType) => {
  try {
    const result = await getRedirectResult(firebaseAuth);
    const credential =
      provider === ProviderType.GOOGLE
        ? GoogleAuthProvider.credentialFromResult(result)
        : FacebookAuthProvider.credentialFromResult(result);
    console.log(credential);
    if (credential) {
      console.log(result.user);
    }
  } catch (error) {
    console.log(error);
  }
};

// checking for existing user accounting with sign-in credentials
// TODO: implement logic to match the third party authenticating with an existing user account
// export const validate;

// Set email address and password for existing user account
const getEmailCredentials = (
  email: string,
  password: string
): EmailAuthCredential => {
  return EmailAuthProvider.credential(email, password);
};

export const linkUserCredentials = (email: string, password: string) => {
  const credential = getEmailCredentials(email, password);
  return linkWithCredential(firebaseAuth.currentUser, credential);
};
