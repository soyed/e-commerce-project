import { Product } from '../../components/ProductPage/model';

export interface CartItem {
  product?: Product;
  quantity?: number;
}
