import React from 'react';
import HeroSection from './Hero-Section/HeroSection';
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
