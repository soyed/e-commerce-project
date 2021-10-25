import React from 'react';
import HeroSection from './Hero-Section/HeroSection';
import HomeOptions from './HomeOptions/HomeOptions';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = props;

  return (
    <div className={'flex flex-col flex-1'}>
      <HomeOptions />
      <HeroSection />
    </div>
  );
};

export default HomePage;
