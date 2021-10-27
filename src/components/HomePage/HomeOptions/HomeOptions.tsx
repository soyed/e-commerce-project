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
          linkTo={LinkPath.MARKET_PLACE}
        >
          <h3>Market Place</h3>
        </UILink>
      </div>
      <div className='w-1/3 flex justify-center h-full items-center'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.CATEGORIES}
        >
          <h3>Categories</h3>
        </UILink>
      </div>
      <div className='w-1/3 flex justify-center h-full items-center'>
        <UILink
          linkType={RouteType.COMMERCE}
          isActive={true}
          linkTo={LinkPath.BUYING_OPTIONS}
        >
          <h3>Buying Options</h3>
        </UILink>
      </div>
    </div>
  );
};

export default HomeOptions;
