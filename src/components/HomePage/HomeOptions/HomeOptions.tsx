import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UILink from '../../../UIKit/UILink/UILink';

interface HomeOptionsProps {}

const HomeOptions: React.FC<HomeOptionsProps> = (props) => {
  const {} = props;

  return (
    <div className='flex justify-center w-full bg-blue-500 h-20 items-center '>
      <div className='w-1/3 flex justify-center h-full items-center'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.SALE}
        >
          <h3>Sale</h3>
        </UILink>
      </div>
      <div className='w-1/3 flex justify-center h-full items-center'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.CATEGORY}
        >
          <h3>Categories</h3>
        </UILink>
      </div>
      <div className='w-1/3 flex justify-center h-full items-center'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.PURCHASE_OPTIONS}
        >
          <h3>Buying Options</h3>
        </UILink>
      </div>
    </div>
  );
};

export default HomeOptions;
