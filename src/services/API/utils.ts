// The header file needs to be included in every request sent
export const API_Headers = {
  'x-rapidapi-host': 'e-commerce12.p.rapidapi.com',
  'x-rapidapi-key': 'a0d839c038mshba62a4bc00678a4p18f251jsnb5a3516bd0c2',
};
// ENDPOINT
const BASE_URL = 'https://e-commerce12.p.rapidapi.com';

// ALL ENDPOINT
// Get all categories
export const CATEGORIES_URL = `${BASE_URL}/categories/`;
// Get Products by Category
export const endpointProductsByCategory = (
  categoryName: string,
  page?: number,
  limit?: number
) => {
  return `${CATEGORIES_URL}getitemsbycategory?category=${categoryName}${
    page ? `&page=${page}` : ''
  }${limit ? `&limit=${limit}` : ''}`;
};

// Get products by Id. With the option to see similar products
export const endpointProductsById = (
  productId: string,
  similarProducts: boolean = true
) => {
  return `${BASE_URL}/products/getproductbyid/${productId}${
    similarProducts ? `?similarProducts=${similarProducts}` : ''
  }`;
};

// Get Top rated Products by Category
export const endpointTopRatedByCategory = (
  category?: string,
  rating?: number,
  page?: number,
  limit?: number
) => {
  return `${CATEGORIES_URL}toprated?category=${category}${
    rating ? `&rating=${rating}` : ''
  }${page ? `&page=${page}` : ''}${limit ? `&limit=${limit}` : ''}`;
};

// Get Top sales Products by Category
export const endpointTopSalesByCategory = (
  category?: string,
  sales?: string,
  page?: number,
  limit?: number
) => {
  return `${CATEGORIES_URL}toprated?category=${category}${
    sales ? `&rating=${sales}` : ''
  }${page ? `&page=${page}` : ''}${limit ? `&limit=${limit}` : ''}`;
};

// Get all products
export const endpointAllProducts = (page?: number, limit?: number) => {
  return `${BASE_URL}/products${limit ? `?limit=${limit}` : ''}${
    page ? `&page=${page}` : ''
  }`;
};

// export const getTopRatedProducts;
