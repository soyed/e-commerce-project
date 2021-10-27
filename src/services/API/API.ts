// Possible request on the end point

import {
  API_Headers,
  CATEGORIES_URL,
  endpointAllProducts,
  endpointProductsByCategory,
  endpointProductsById,
  endpointTopRatedByCategory,
  endpointTopSalesByCategory,
} from './utils';

// Available end points

// GET product by ID
export function getProductsById(
  productId: string,
  similarProducts?: boolean
): Promise<Response> {
  const endpoint = endpointProductsById(productId, similarProducts);
  return fetch(endpoint, { headers: API_Headers });
}

// GET products by category
export function getProductsByCategory(categoryName: string): Promise<Response> {
  const endpoint = endpointProductsByCategory(categoryName);
  return fetch(endpoint, { headers: API_Headers });
}

// Top sales by Category
export function getTopSalesByCategory(
  category: string,
  sales?: string,
  page?: number,
  limit?: number
): Promise<Response> {
  const endpoint = endpointTopSalesByCategory(category, sales, page, limit);
  return fetch(endpoint, { headers: API_Headers });
}

// Top rated by Category
export function getTopRatedByCategory(
  category: string,
  rating?: number,
  page?: number,
  limit?: number
): Promise<Response> {
  const endpoint = endpointTopRatedByCategory(category, rating, page, limit);
  return fetch(endpoint, { headers: API_Headers });
}

// Get All Categories
export function getCategories(): Promise<Response> {
  return fetch(CATEGORIES_URL, { headers: API_Headers });
}
// Top sold products

// Top rated products

// Get product by name

// Get All Products
export function getAllProducts(
  page?: number,
  limit?: number
): Promise<Response> {
  const endpoint = endpointAllProducts(page, limit);
  return fetch(endpoint, { headers: API_Headers });
}
