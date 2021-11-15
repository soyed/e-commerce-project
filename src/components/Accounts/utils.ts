export enum VerifyUser {
  SIGN_IN = 'login',
  SIGN_UP = 'signup',
}

export interface UserInformation {
  firstName?: string;
  lastName?: string;
  password?: string;
  email?: string;
  userId?: string;
  dateCreated?: Date;
}
