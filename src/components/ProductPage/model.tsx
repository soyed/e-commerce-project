import { Platform } from '../../redux/Category/utils';

export interface Product {
  id?: string; // => _id
  category?: string; // => category
  categoryId?: string; // => category_id
  image?: string; // image = [0: '']
  description?: string;
  name?: string;
  type?: string;
  price?: number;
  stock?: number;
  sales?: number;
  ratings?: number;
  reviews?: any;
  color?: string;
  platform: Platform;
}
