import { Category } from '../../components/CategoriesPage/model';
import { getCategories } from '../../services/API/API';
import { fetchCategory, loadCategory } from './categoryActionCreators';

export enum Platform {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
}

// Assign the appropriate images to the categories and return an array of two category type

const assignPlatform = (categories: Category[]) => {};

// parse the categories
const parsedFetchedCategories = (categories: any[]) => {
  //   const tempCategories = categories;
  //   const excludeFields = ['pageName', 'numberOfCategories'];
  //   excludeFields.forEach((element: any) => delete tempCategories[element]);

  console.log(categories);

  const parsedCategories: Category[] = [];

  for (let key in categories) {
    // debugger;
    parsedCategories.push({
      id: categories[key]._id,
      categoryName: categories[key].category_name,
      categoryId: categories[key].category_id,
      image: categories[key].image[0],
    });
  }

  return parsedCategories;
};

// thunk function
export const fetchCategories = async (dispatch: any) => {
  try {
    dispatch(loadCategory(true));
    const response = await getCategories();
    const responseData = await response.json();
    const { categories } = responseData;
    console.log(categories);
    const parsedData = parsedFetchedCategories(categories);
    console.log(parsedData);
    dispatch(fetchCategory(parsedData));
    dispatch(loadCategory(false));
  } catch (error) {
    console.log(error);
  }
};
