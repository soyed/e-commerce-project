import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UILink from '../../../UIKit/UILink/UILink';
import './HeroSection.scss';
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const {} = props;
  return (
    <div className='hero-section flex justify-center h-screen-1/2'>
      <div className='hero-section--container flex justify-evenly w-4/5 bg-red-300'>
        <div className='hero-section--container-1 flex justify-center items-center'>
          <UILink
            linkTo={LinkPath.MEN}
            linkType={RouteType.COMMERCE}
            isActive={false}
          >
            <button className='hero-section--container-1__btn'>
              Shop Male
            </button>
          </UILink>
        </div>
        <div className='hero-section--container-2 flex justify-center items-center'>
          <UILink
            linkTo={LinkPath.WOMEN}
            linkType={RouteType.COMMERCE}
            isActive={false}
          >
            <button className='hero-section--container-2__btn'>
              Shop Female
            </button>
          </UILink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
