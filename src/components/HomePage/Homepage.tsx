import React from 'react';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import HeroSection from './Hero-Section/HeroSection';
import HomeOptions from './HomeOptions/HomeOptions';
import './Homepage.scss';
import ExploreMarket from './ExploreMarket/ExploreMarket';
import Subscription from './Subscription/Subscription';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = props;

  return (
    <div className={'homepage-section'}>
      <HeroSection />
      <Subscription />
      <ExploreMarket />
    </div>
  );
};

export default HomePage;
