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
import { useLocation, useRouteMatch } from 'react-router-dom';
interface AccountsProps {}

const Accounts: React.FC<AccountsProps> = (props) => {
  const location = useLocation();

  const query = useRouteMatch();

  const queryParams = new URLSearchParams(location.search);

  console.log(query);

  console.log(location);

  // methods
  const handleGoogleProvider = () => {};

  const handleFacebookProvider = () => {};

  const handleAuthenticatingUser = () => {};

  const isLogin = true;

  return (
    <div className='accounts'>
      <div className='accounts__container'>
        <div className='accounts__action'>
          <AccountAction />
        </div>

        <div className='accounts__info'>
          {isLogin ? (
            <UIModal
              action={VerifyUser.SIGN_IN}
              onClickGoogle={handleGoogleProvider}
            />
          ) : (
            <UIModal
              action={VerifyUser.SIGN_UP}
              onClickGoogle={handleGoogleProvider}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
