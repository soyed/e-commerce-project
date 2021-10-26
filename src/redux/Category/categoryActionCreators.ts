import { Category } from '../../components/CategoriesPage/model';
import CategoryActions from './categoryActions';
export const fetchCategory = (categories: Category[]) => {
  return { type: CategoryActions.FETCH_CATEGORIES, payload: categories };
};

export const loadCategory = (status: boolean) => {
  return { type: CategoryActions.LOADING_CATEGORIES, payload: status };
};
