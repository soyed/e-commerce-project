import { Category } from '../../components/CategoriesPage/model';
import { getCategories } from '../../services/API/API';
import {
  failedCategory,
  fetchCategory,
  loadCategory,
} from './categoryActionCreators';

export enum Platform {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
}

export enum STATUS {
  IDLE = 'Idle',
  LOADING = 'Loading',
  FAILED = 'Failed',
}

export enum Images {
  MEN = '',
  WOMEN = '',
  KIDS = '',
  ELECTRONICS = '',
  PHONES = '',
  OFFICE = '',
  PETS = '',
  OUTDOOR = '',
  BEAUTY = '',
  HOME_IMPROVEMENT = '',
  BAGS = '',
  JEWELRY = '',
}

const categoryImage = (categories: Category[]) => {};

// Assign the appropriate images to the categories and return an array for the categories
const categoryParser = (categories: any[]): Category[] => {
  const parsedCategories: Category[] = [];
  for (let key in categories) {
    // filter the categories
    parsedCategories.push({
      id: categories[key]._id,
      categoryName: categories[key].category_name,
      categoryId: categories[key].category_id,
      image: categories[key].image[0],
    });
  }
  return parsedCategories;
};

// parse the categories
const parsedFetchedCategories = (categories: any[]): Category[][] => {
  // this are products that would be displayed at the marketplace section of the app
  const excludedCategories = [
    'BeautyHealthHair',
    'ToysKidsBabies',
    'ConsumerElectronics',
    'PhonesTelecommunications',
    'HomePetAppliance',
    'ComputerOfficeSecurity',
    'OutdoorFunSports',
    'HomeImprovementTools',
  ];

  const commerce = categories.filter(
    (category) =>
      !excludedCategories.some((element) => element === category.category_id)
  );

  const marketPlace = categories.filter((category) =>
    excludedCategories.some((element) => element === category.category_id)
  );

  console.log(commerce);
  console.log(marketPlace);

  // const commerceCategories = categoryParse(categories);
  const parsedData = [categoryParser(commerce), categoryParser(marketPlace)];

  return parsedData;
};

// thunk function
export const fetchCategories = async (dispatch: any) => {
  try {
    // dispatch loading
    dispatch(loadCategory(STATUS.LOADING));
    // fetch category, parse data and send a dispatch to updated list of categories
    const response: Response = await getCategories();
    const responseData = await response.json();
    const { categories } = responseData;
    const parsedData = parsedFetchedCategories(categories);
    console.log(parsedData);
    dispatch(fetchCategory(parsedData));
    dispatch(loadCategory(STATUS.IDLE));
  } catch (error) {
    console.log(error);
    dispatch(failedCategory('Error - Failed To Fetch Categories'));
    dispatch(loadCategory(STATUS.FAILED));
  }
};
