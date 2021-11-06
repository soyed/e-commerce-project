import { Product } from '../../components/ProductPage/model';
import { getAllProducts } from '../../services/API/API';
import { Platform, STATUS } from '../Category/utils';
import { validatePlatform } from '../Products/utils';
import {
  marketPlaceError,
  marketplaceProducts,
  marketPlaceStatus,
} from './marketPlaceActionCreators';

export const TOTAL_PRODUCTS = 138;

// parsing all Products regardless of Category
// HACKY: This is redundant. the method categoryProductParser does something similar but requires a category id
export const parseAllProducts = (products: any[]) => {
  const parsedProducts: Product[] = [];
  for (let key in products) {
    parsedProducts.push({
      id: products[key]._id,
      name: products[key].name,
      description: products[key].description,
      category: products[key].category,
      categoryId: products[key].category_id,
      stock: products[key].stock,
      ratings: products[key].ratings,
      price: products[key].price,
      image: products[key].image[0],
      sales: products[key].sales,
      color: products[key].color,
      platform: validatePlatform(products[key].category_id)
        ? Platform.MARKETPLACE
        : Platform.COMMERCE,
    });
  }
  return parsedProducts;
};

// fetch all products and filter out marketplace products
export const fetchMarketPlaceProducts = (
  pageNumber: number = 1,
  limit: number = TOTAL_PRODUCTS
) => {
  return async function (dispatch: any) {
    try {
      dispatch(marketPlaceStatus(STATUS.LOADING));
      const response: Response = await getAllProducts(pageNumber, limit);
      const responseData = await response.json();
      console.log(responseData);
      // parse the data to include platform type for products
      const { products } = responseData;
      console.log(products);
      // filters for marketplace products
      const parsedProducts: Product[] = parseAllProducts(products).filter(
        (product) => product.platform === Platform.MARKETPLACE
      );
      console.log(parsedProducts);
      dispatch(marketplaceProducts(parsedProducts));
      dispatch(marketPlaceStatus(STATUS.IDLE));
    } catch (error) {
      dispatch(
        marketPlaceError('Error - Failed to Fetch Market Place Products')
      );
      dispatch(marketPlaceStatus(STATUS.IDLE));
    }
  };
};
