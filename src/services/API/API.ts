// Possible request on the end point

import {
  API_Headers,
  CATEGORIES_URL,
  endpointProductsByCategory,
} from './utils';

// Available end points

// GET product by ID
export function getProductsByCategory(categoryName: string): Promise<Response> {
  const endpoint = endpointProductsByCategory(categoryName);
  return fetch(endpoint, { headers: API_Headers });
}

// Top sales by Category

// Top rated by Category

// Get All Categories

// Top sold products

// Top rated products

// GET products by category
export function getCategories(): Promise<Response> {
  return fetch(CATEGORIES_URL, { headers: API_Headers });
}

// Get product by name

// Get All Products
