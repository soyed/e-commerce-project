import React from 'react';
import { LinkPath } from '../../../routes/utils';
import UIButton from '../../../UIKit/UIButton/UIButton';
import UILink from '../../../UIKit/UILink/UILink';

interface TopRatedProps {}

const TopRated: React.FC<TopRatedProps> = (props) => {
  return (
    <div className='flex flex-col justify-evenly items-center h-40 bg-indigo-300'>
      <h3>Top Rated Products</h3>
      <div className='flex  flex-grow justify-evenly'>
        <div className='flex justify-center items-center'>Product 1</div>
        <div className='flex justify-center items-center'>Product 2</div>
        <div className='flex justify-center items-center'>Product 3</div>
      </div>
      <div className='flex justify-center'>
        <UIButton text={'Show More'} linkTo={LinkPath.TOP_RATED_PRODUCTS} />
      </div>
    </div>
  );
};

export default TopRated;
