import React from 'react';
import UIModal from '../../UIKit/UIModal/UIModal';
import AccountAction from './Account-Actions/AccountAction';
import './Accounts.scss';
import { VerifyUser } from './utils';
interface AccountsProps {}

const Accounts: React.FC<AccountsProps> = (props) => {
  return (
    <div className='accounts'>
      <div className='accounts__container'>
        <AccountAction />
        <UIModal action={VerifyUser.SIGN_IN} />
      </div>
    </div>
  );
};

export default Accounts;
