import {
  authenticateWithPasswordAndEmail,
  authenticateWithThirdParty,
  createNewUser,
} from '../../services/Firebase/firebase-auth';
import { ProviderType } from '../../services/Firebase/firebase.config';

export interface User {}

export const signupNewUser = (email: string, password: string) => {
  return async function (dispatch: any) {
    try {
      const user = await createNewUser(email, password);
      console.log(user);
      //   dispatch action on success

      // store client information as well
    } catch (error) {
      console.log(error);
      // dispatch action on failure
    }
  };
};

export const signInUser = (email: string, password: string) => {
  return async function (dispatch: any) {
    try {
      const user = await authenticateWithPasswordAndEmail(email, password);
      console.log(user);
      //   dispatch action on success
    } catch (error) {
      console.log(error);
      // dispatch action on failure
    }
  };
};

export const thirdPartyAuthentication = (providerType: ProviderType) => {
  return async function (dispatch: any) {
    try {
      //   dispatch action on success
      await authenticateWithThirdParty(providerType);
    } catch (error) {
      console.log(error);
      // dispatch action on failure
    }
  };
};
