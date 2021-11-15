import React from 'react';
import {
  getThirdPartyRedirectResult,
  thirdPartySignUp,
} from '../../services/Firebase/firebase-auth';
import { ProviderType } from '../../services/Firebase/firebase.config';
import UIModal from '../../UIKit/UIModal/UIModal';
import AccountAction from './Account-Actions/AccountAction';
import './Accounts.scss';
import { UserInformation, VerifyUser } from './utils';
import { useLocation, useRouteMatch } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './Signup/Signup';

import { useDispatch } from 'react-redux';
import { signInUser, signupNewUser } from '../../redux/Users/utils';
interface AccountsProps {}

const Accounts: React.FC<AccountsProps> = (props) => {
  const location = useLocation();

  const query = useRouteMatch();

  const queryParams = new URLSearchParams(location.search);

  console.log(query);

  console.log(location);

  const dispatch = useDispatch();

  // methods
  const handleSignUp = (userInfo: UserInformation) => {
    // sign up user using firebase
    dispatch(signupNewUser(userInfo.email, userInfo.password));
  };

  const handleSignIn = (userInfo: UserInformation) => {
    dispatch(signInUser(userInfo.email, userInfo.password));
  };

  const isLogin = true;

  return (
    <div className='accounts'>
      <div className='accounts__container'>
        <div className='accounts__action'>
          <AccountAction />
        </div>

        <div className='accounts__info'>
          {isLogin ? (
            <Login onClickLogin={handleSignIn} />
          ) : (
            <SignUp onClickSignUp={handleSignUp} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Accounts;
