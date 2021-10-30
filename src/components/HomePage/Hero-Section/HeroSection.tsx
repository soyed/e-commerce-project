import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UILink from '../../../UIKit/UILink/UILink';
import './HeroSection.scss';
import womenHero from '../../../assets/home-page-women.jpg';
import menHero from '../../../assets/homepage-men.jpg';
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const {} = props;
  return (
    <div className='hero-section flex justify-center h-screen-1/2'>
      <div className='hero-section--container  '>
        <div className='hero-section--container-1'>
          <div className='container-1__body-1'>
            <img className='hero--img' src={menHero} alt='men-hero-img' />
          </div>
          <div className='container-1__content'>
            <UILink
              linkTo={LinkPath.MEN}
              linkType={RouteType.COMMERCE}
              isActive={false}
            >
              <button className='hero-section__btn'>Shop Male</button>
            </UILink>
          </div>
        </div>
        <div className='hero-section--container-2'>
          <div className='container-2__body-2'>
            <img
              className='hero--img'
              src={womenHero}
              alt='women-landing-image'
            />
          </div>
          <div className='container-2__content'>
            <UILink
              linkTo={LinkPath.WOMEN}
              linkType={RouteType.COMMERCE}
              isActive={false}
            >
              <button className='hero-section__btn'>Shop Female</button>
            </UILink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
