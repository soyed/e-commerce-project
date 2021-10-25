import React from 'react';
import UIIcon from '../../UIKit/UIIcon/UIIcon';
import { IconType } from '../../utils/icons';

const Footer = () => {
  return (
    <div className='flex flex-col h-12'>
      <div className='flex justify-center'>
        <p>FAQ</p>
        <p>Contact</p>
        <p>Shipping</p>
      </div>
      <div className='flex justify-center align-center'>
        <UIIcon iconType={IconType.INSTAGRAM} linkTo={'/instagram'} />
        <UIIcon iconType={IconType.FACEBOOK} linkTo={'/facebook'} />
        <UIIcon iconType={IconType.TWITTER} linkTo={'/twitter'} />
      </div>
    </div>
  );
};

export default Footer;
