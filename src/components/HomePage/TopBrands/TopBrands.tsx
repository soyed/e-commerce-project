import React from 'react';
import { LinkPath } from '../../../routes/utils';
import UIButton from '../../../UIKit/UIButton/UIButton';

interface TopBrandsProps {}

const TopBrands: React.FC<TopBrandsProps> = (props) => {
  return (
    <div className='flex flex-col justify-evenly items-center h-screen-1/4 bg-purple-100'>
      <h3>Top Rated Brands</h3>
      <div className='flex justify-evenly'>
        <div className='flex justify-center items-center w-1/3'>Brand-1</div>
        <div className='flex justify-center items-center w-1/3'>Brand-2</div>
        <div className='flex justify-center items-center w-1/3'>Brand-3</div>
      </div>
      <div className='flex justify-center'>
        <UIButton text={'More Brands'} linkTo={LinkPath.TOP_RATED_BRANDS} />
      </div>
    </div>
  );
};

export default TopBrands;
