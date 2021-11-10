import React from 'react';
import { LinkPath, RouteType } from '../../../routes/utils';
import UILink from '../../../UIKit/UILink/UILink';
import './HeroSection.scss';
import womenHero from '../../../assets/home-page-women.jpg';
import menHero from '../../../assets/homepage-men.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../../redux/Category/utils';
import { categoryCommerce } from '../../../redux/Category/categorySelectors';
import { Category } from '../../CategoriesPage/model';
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  // Fetch the men and female category
  // HACKY: A change in the category id from the endpoint would break the page
  // TODO: Refactor this logic
  const FEMALE_ROUTE = `/shop/WomensFashion/products`;
  const MALE_ROUTE = `/shop/MensFashion/products`;

  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(fetchCategories);
  // }, []);

  const Categories: Category[] = useSelector(categoryCommerce);
  const female_route: Category[] = Categories.filter((category) =>
    category.categoryId.includes('Womens')
  );

  const male_route: Category[] = Categories.filter((category) =>
    category.categoryId.includes('Mens')
  );

  console.log(female_route[0].categoryId);
  console.log(male_route[0].categoryId);

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
              linkTo={MALE_ROUTE}
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
              linkTo={FEMALE_ROUTE}
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
