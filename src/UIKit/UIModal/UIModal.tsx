import React from 'react';
import { UserInformation, VerifyUser } from '../../components/Accounts/utils';
import { createNewUser } from '../../services/Firebase/firebase-auth';

import './UIModal.scss';

interface UIModalProps {
  action?: VerifyUser;
  onClickSubmit?: (userInfo: UserInformation) => void;
  onClickGoogle?: () => void;
  onClickFacebook?: () => void;
}

const UIModal: React.FC<UIModalProps> = (props) => {
  const { action, onClickSubmit, onClickGoogle, onClickFacebook } = props;

  const [email, setEmail] = React.useState<string>('');
  const [firstName, setFirstName] = React.useState<string>('');
  const [lastName, setLastName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    // validate the email
    setEmail(event.target.value);
  };
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    // validate the first name
    setFirstName(event.target.value);
  };
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    // validate the last name
    setLastName(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    // validate the password
    setPassword(event.target.value);
  };

  const handleSubmission = (event: React.MouseEvent<HTMLButtonElement>) => {
    // prevent default
    event.preventDefault();

    // only allow this if all of the information is valid
    const userInfo: UserInformation = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    onClickSubmit?.(userInfo);
  };

  return (
    <div className='modal'>
      <div className='modal--container'>
        <div className='modal--container--1'>
          <h3 className='modal--container--1__heading'>{action}</h3>
        </div>
        <form className='modal--container--2'>
          <div className='container--2__content-1'>
            <label className='modal__label'>Email Address:</label>
            <input
              className='modal__input'
              type='email'
              placeholder='Email Address'
              onChange={handleEmail}
            />
          </div>
          {action === VerifyUser.SIGN_UP && (
            <div className='container--2__content-2'>
              <label className='modal__label'>FirstName:</label>
              <input
                className='modal__input'
                type='text'
                placeholder='First Name'
                onChange={handleFirstName}
              />
            </div>
          )}
          {action === VerifyUser.SIGN_UP && (
            <div className='container--2__content-3'>
              <label className='modal__label'>Last Name:</label>
              <input
                className='modal__input'
                type='text'
                placeholder='Last Name'
                onChange={handleLastName}
              />
            </div>
          )}
          <div className='container--2__content-4'>
            <label className='modal__label'>Password:</label>
            <input
              className='modal__input'
              type='password'
              placeholder='Password'
              onChange={handlePassword}
            />
          </div>
          <div className='container--2__content-5'>
            <button
              className='container--2__content-5__btn'
              onClick={handleSubmission}
            >
              {action}
            </button>
          </div>
          <div className='container--2__content-6'>
            <p className='container--2__content-6__text'>forgot password?</p>
          </div>
        </form>
        <div className='modal--container--3'>
          <div className='modal--container--3__heading'>{`Or ${action} with...`}</div>
          <div className='modal--container--3__options'>
            <div className='modal--container--3__options--option-1'>
              <button className='option-1__btn' onClick={onClickGoogle}>
                Google
              </button>
            </div>
            <div className='modal--container--3__options--option-2'>
              <button className='option-2__btn' onClick={onClickFacebook}>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIModal;
