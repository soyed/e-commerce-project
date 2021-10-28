import React from 'react';
import { VerifyUser } from '../../components/Accounts/utils';

import './UIModal.scss';

interface UIModalProps {
  action?: VerifyUser;
  onClickSubmit?: () => {};
}

const UIModal: React.FC<UIModalProps> = (props) => {
  const { action } = props;

  //   const handleSubmission = () => {};
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
            />
          </div>
          {action === VerifyUser.SIGN_UP && (
            <div className='container--2__content-2'>
              <label className='modal__label'>FirstName:</label>
              <input
                className='modal__input'
                type='text'
                placeholder='First Name'
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
              />
            </div>
          )}
          <div className='container--2__content-4'>
            <label className='modal__label'>Password:</label>
            <input
              className='modal__input'
              type='password'
              placeholder='Password'
            />
          </div>
          <div className='container--2__content-5'>
            <button className='container--2__content-5__btn'>{action}</button>
          </div>
          <div className='container--2__content-6'>
            <p className='container--2__content-6__text'>forgot password?</p>
          </div>
        </form>
        <div className='modal--container--3'>
          <div className='modal--container--3__heading'>{`Or ${action} with...`}</div>
          <div className='modal--container--3__options'>
            <div className='modal--container--3__options--option-1'>
              <button className='option-1__btn'>Google</button>
            </div>
            <div className='modal--container--3__options--option-2'>
              <button className='option-2__btn'>Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIModal;
