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
) => {
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
  // try {
  //   const provider =
  //     providerType === ProviderType.GOOGLE ? googleProvider : facebookProvider;
  //   await linkWithRedirect(firebaseAuth.currentUser, provider);
  // } catch (error) {}
  const provider =
    providerType === ProviderType.GOOGLE ? googleProvider : facebookProvider;

  return linkWithRedirect(firebaseAuth.currentUser, provider);
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

export const linkUserCredentials = async (email: string, password: string) => {
  try {
    const credential = getEmailCredentials(email, password);
    const userCredential = await linkWithCredential(
      firebaseAuth.currentUser,
      credential
    );
    console.log(userCredential);
    // Validation message
  } catch (error) {
    console.log(error);
  }
};
