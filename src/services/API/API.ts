// Possible request on the end point

import { API_Headers, CATEGORIES_URL, getProductsByCategory } from './utils';

// Available end points

// GET product by ID

// Top sales by Category

// Top rated by Category

// Get All Categories

// Top sold products

// Top rated products

// GET products by category
export function getCategories() {
  return fetch(CATEGORIES_URL, { headers: API_Headers });
}

// Get product by name

// Get All Products
