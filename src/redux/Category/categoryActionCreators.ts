import CategoryActions from './categoryActions';
export const fetchCategory = (categories: any) => {
  return { type: CategoryActions.FETCH_CATEGORIES, payload: categories };
};

export const loadCategory = (status: boolean) => {
  return { type: CategoryActions.LOADING_CATEGORIES, payload: status };
};
