// Redux Thunk

import { Product } from '../../components/ProductPage/model';
import { getProductsByCategory } from '../../services/API/API';
import { fetchingProducts, loadingProducts } from './productsActionCreators';

// parse ProductsFetch
const parseFetchedProducts = (
  products: any[],
  categoryName: string
): Product[] => {
  let parsedProducts: Product[] = [];
  console.log(products[0].reviews.toString());

  for (let key in products) {
    if (products[key].category_id === categoryName) {
      parsedProducts.push({
        id: products[key]._id,
        name: products[key].name,
        description: products[key].description,
        category: products[key].category,
        stock: products[key].stock,
        ratings: products[key].ratings,
        price: products[key].price,
        image: products[key].image[0],
        sales: products[key].sales,
        color: products[key].color,
      });
    }
  }

  return parsedProducts;
};

// Fetching from Endpoint
export const fetchProductsByCategories = (categoryName: string) => {
  return async function (dispatch: any) {
    try {
      dispatch(loadingProducts(true));
      const response = await getProductsByCategory(categoryName);
      const responseData = await response.json();
      const { products } = responseData;
      const parsedProducts = parseFetchedProducts(products, categoryName);
      console.log(parsedProducts);
      dispatch(fetchingProducts(parsedProducts));
      dispatch(loadingProducts(false));
    } catch (error) {}
  };
};
