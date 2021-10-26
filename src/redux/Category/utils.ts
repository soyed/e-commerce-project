import { Category } from '../../components/CategoriesPage/model';
import { getCategories } from '../../services/API/API';
import { fetchCategory } from './categoryActionCreators';

export enum Platform {
  INTERNAL = 'internal',
  EXTERNAL = 'external',
}

// {
//     _id: '614b6449cb72a9d1d2ddced7',
//     category_name: 'Toys, Kids & Babies',
//     category_id: 'ToysKidsBabies',
//     image: [
//       'https://res.cloudinary.com/elouisramsey/image/upload/v1632330824/ecommerceAPI/2021-09-22T17-13-42.368Zfeeding-bottle.png.png',
//     ],
//     createdAt: '2021-09-22T17:13:45.589Z',
//     updatedAt: '2021-09-22T17:13:45.589Z',
//     __v: 0,
//   },

// parse the categories
const parsedFetchedCategories = (categories: any) => {
  let fetchedCategory = { ...categories };
  const excludeFields = ['pageName', 'numberOfCategories'];
  excludeFields.forEach((element: any) => delete fetchedCategory[element]);

  const parsedCategories: Category[] = [];

  for (let key in fetchedCategory) {
  }
};

// thunk function
export const fetchCategories = async (dispatch: any) => {
  const response = await getCategories();
  const responseData = await response.json();
  console.log(responseData);
  dispatch(fetchCategory(responseData));
};
