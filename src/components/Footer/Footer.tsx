import React from 'react';
import UIIcon from '../../UIKit/UIIcon/UIIcon';

const Footer = () => {
  return (
    <div className='flex flex-col h-12'>
      <div className='flex justify-center'>
        <p>FAQ</p>
        <p>Contact</p>
        <p>Shipping</p>
      </div>
      <div className='flex justify-center align-center'>
        <UIIcon />
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  );
};

export default Footer;
