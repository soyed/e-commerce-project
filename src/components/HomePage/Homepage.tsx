import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (props) => {
  const {} = props;

  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default HomePage;
