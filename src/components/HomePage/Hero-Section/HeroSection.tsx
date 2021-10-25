import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UILink from '../../../UIKit/UILink/UILink';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const {} = props;
  return (
    <div className='flex justify-center h-screen-1/2'>
      <div className='flex justify-evenly w-4/5 bg-red-300'>
        <div className='flex justify-center items-center'>
          <UILink
            linkTo={LinkPath.MEN}
            linkType={RouteType.COMMERCE}
            isActive={false}
          >
            <button>Shop Male</button>
          </UILink>
        </div>
        <div className='flex justify-center items-center'>
          <UILink
            linkTo={LinkPath.WOMEN}
            linkType={RouteType.COMMERCE}
            isActive={false}
          >
            <button>Shop Female</button>
          </UILink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
