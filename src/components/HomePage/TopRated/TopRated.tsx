import React from 'react';
import UILink from '../../../UIKit/UILink/UILink';

interface TopRatedProps {}

const TopRated: React.FC<TopRatedProps> = (props) => {
  return (
    <div className='flex flex-col justify-evenly h-40'>
      <h3>Top Rated Products</h3>
      <div className='flex  flex-grow justify-center'>
        <div className='flex justify-center'>Product 1</div>
        <div className='flex justify-center'>Product 2</div>
        <div className='flex justify-center'>Product 3</div>
      </div>
      <div className='flex justify-center'>
        <UILink></UILink>
      </div>
    </div>
  );
};

export default TopRated;
