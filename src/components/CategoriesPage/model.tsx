import { Platform } from '../../redux/Category/utils';
import { LinkPath } from '../../routes/utils';

// Endpoint scheme for Categories
export interface Category {
  id?: string; // => _id
  categoryName?: string; // => category_name
  categoryId?: string; // category_id
  image?: string; // => image: [0: ""]
  platform?: Platform; //
}
