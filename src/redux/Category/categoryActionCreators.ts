import { Category } from '../../components/CategoriesPage/model';
import CategoryActions from './categoryActions';
import { STATUS } from './utils';
export const fetchCategory = (categories: Category[][]) => {
  return { type: CategoryActions.FETCH_CATEGORIES, payload: { categories } };
};

export const loadCategory = (status: STATUS) => {
  return { type: CategoryActions.LOADING_CATEGORIES, payload: { status } };
};

export const failedCategory = (message: string) => {
  return { type: CategoryActions.FAILED_CATEGORIES, payload: { message } };
};
