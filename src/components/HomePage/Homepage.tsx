import React from 'react';
import UILoadingSpinner from '../../UIKit/UILoadingSpinner/UILoadingSpinner';
import HeroSection from './Hero-Section/HeroSection';
import HomeOptions from './HomeOptions/HomeOptions';
import TopBrands from './TopBrands/TopBrands';
import TopRated from './TopRated/TopRated';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = props;

  return (
    <div className={'flex flex-col flex-1'}>
      <HeroSection />
      <TopRated />
      <TopBrands />
    </div>
  );
};

export default HomePage;
