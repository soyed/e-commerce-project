// The header file needs to be included in every request sent
export const API_Headers = {
  'x-rapidapi-host': 'e-commerce12.p.rapidapi.com',
  'x-rapidapi-key': 'a0d839c038mshba62a4bc00678a4p18f251jsnb5a3516bd0c2',
};
// ENDPOINT
const URL = 'https://e-commerce12.p.rapidapi.com';

// ALL ENDPOINT
// Get all categories
export const CATEGORIES_URL = `${URL}/categories/`;
// Get Products by Category
export const getProductsByCategory = (
  category: string,
  page?: number,
  limit?: number
) => {
  return `${CATEGORIES_URL}getitemsbycategory?category=${category}${
    page ? `&page=${page}` : ''
  }${limit ? `&limit=${limit}` : ''}`;
};

// Get products by Id. With the option to see similar products
export const getProductsById = (
  productId: string,
  similarProducts: boolean = true
) => {
  return `${URL}/products/getproductbyid/${productId}${
    similarProducts ? `?similarProducts=${similarProducts}` : ''
  }`;
};

// Get Top rated Products by Category
export const getTopRatedByCategory = (
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
export const getTopSalesByCategory = (
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
export const getAllProducts = (page?: number, limit?: number) => {
  return `${URL}/products${limit ? `?limit=${limit}` : ''}${
    page ? `&page=${page}` : ''
  }`;
};

// export const getTopRatedProducts;
