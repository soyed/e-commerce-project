import React from 'react';

const Header = () => {
  return (
    <div className='flex h-32 items-center justify-between'>
      <h1 className=''>E-Commerce</h1>
      {/* The Action bars of the page */}
      <div className='flex items-center justify-end'>
        <p>WishList</p>
        <p>Account</p>
        <p>Favorites</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;
