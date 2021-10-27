import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { LinkPath } from '../routes/utils';
import HomePage from '../components/HomePage/Homepage';
import Header from '../components/Information/Header/Header';
import Footer from '../components/Information/Footer/Footer';

import CategoriesPages from '../components/CategoriesPage/CategoriesPages';
import BuyingOptions from '../components/Information/Buying-Options/Buying-Options';
import Faq from '../components/Information/FAQ/Faq';
import Contact from '../components/Information/Contact/Contact';
import Shipping from '../components/Information/Shipping/Shipping';
import NotFound from '../components/Information/Not-Found/Not-Found';
import MarketPlace from '../components/MarketPlace/MarketPlace';
import HomeOptions from '../components/HomePage/HomeOptions/HomeOptions';
import ProductsPage from '../components/ProductsPage/ProductsPage';
import Cart from '../components/Cart/Cart';

const AppRouter = () => {
  return (
    <>
      <Header />
      <HomeOptions />
      <Switch>
        {/* COMMERCE ROUTE */}
        {/*  */}
        <Route path={LinkPath.ACCOUNT} />
        <Route path={LinkPath.FAVORITES} />
        <Route path={LinkPath.CART} component={Cart} />

        {/* Categories Page => Routes */}
        <Route path={LinkPath.CATEGORIES} component={CategoriesPages} />
        <Route path={LinkPath.CATEGORY} component={ProductsPage} />

        {/* Market Place */}
        <Route path={LinkPath.MARKET_PLACE} component={MarketPlace} />

        {/* Information Route */}
        <Route path={LinkPath.FAQ} component={Faq} />
        <Route path={LinkPath.CONTACT} component={Contact} />
        <Route path={LinkPath.SHIPPING} component={Shipping} />
        <Route path={LinkPath.BUYING_OPTIONS} component={BuyingOptions} />

        {/* General Routes */}
        <Route path={LinkPath.SHOP} component={HomePage} exact />
        <Redirect from={LinkPath.HOME} to={LinkPath.SHOP} exact />
        <Route path={LinkPath.UNIVERSAL} exact>
          <Redirect to={LinkPath.SHOP} />
        </Route>

        {/* Not found page */}
        <Route path={LinkPath.NOTFOUND} component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default AppRouter;
