import { ImageType } from '../redux/Category/utils';

export enum IconType {
  // Social Icons
  FACEBOOK = 'fab fa-facebook-f',
  TWITTER = 'fab fa-twitter',
  INSTAGRAM = 'fab fa-instagram',
  LINKEDIN = 'fab fa-linkedin-in',
  GITHUB = 'fab fa-github',
  // Action Icons
  CART = 'fas fa-cart-plus',
  LIKE = 'fas fa-heart',
  USER = 'fas fa-user',
  DELETE = 'fas fa-trash-alt',
  INCREMENT = 'fas fa-plus',
  DECREMENT = 'fas fa-minus',
  SORT = 'fas fa-sort',
  FILTER = 'fas fa-filter',
  EDIT = 'fas fa-pencil-alt',
  CHEVRON = 'fas fa-chevron-right',
}

export interface categoryImage {
  imageUrl?: string;
  link?: string;
  source?: string;
  platform?: string;
  category?: ImageType;
}
