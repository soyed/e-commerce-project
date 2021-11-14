import React from 'react';
import {
  getThirdPartyRedirectResult,
  thirdPartySignUp,
} from '../../services/Firebase/firebase-auth';
import { ProviderType } from '../../services/Firebase/firebase.config';
import UIModal from '../../UIKit/UIModal/UIModal';
import AccountAction from './Account-Actions/AccountAction';
import './Accounts.scss';
import { VerifyUser } from './utils';
interface AccountsProps {}

const Accounts: React.FC<AccountsProps> = (props) => {
  // methods
  const handleGoogleProvider = () => {
    // thirdPartySignUp(ProviderType.GOOGLE).then((stat) => console.log(stat));
    // // getThirdPartyRedirectResult(ProviderType.GOOGLE);
  };

  const handleFacebookProvider = () => {};

  const handleAuthenticatingUser = () => {};

  return (
    <div className='accounts'>
      <div className='accounts__container'>
        <AccountAction />
        <UIModal
          action={VerifyUser.SIGN_IN}
          onClickGoogle={handleGoogleProvider}
        />
      </div>
    </div>
  );
};

export default Accounts;
