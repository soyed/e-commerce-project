import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from '../../redux/Cart/CartActionCreators';
import { CartItem } from '../../redux/Cart/utils';
import {
  addToWishList,
  removeFromWishlist,
} from '../../redux/WishList/wishlistActionCreators';
import { wishlistProducts } from '../../redux/WishList/wishlistSelectors';
import UICard from '../../UIKit/UICard/UICard';
import { Product } from '../ProductPage/model';
import './Favorites.scss';

interface FavoritesProps {}

const DUMMY_DATA = [
  {
    id: '615335eca7a7fbc6853d0e90',
    name: 'black sunglasses',
    description:
      "Polarized Sunglasses 2020 New UV Protection Driver's Mirror Influx Driving Glasses",
    category: "Men's Fashion",
    stock: 300,
    ratings: 1,
    price: 60,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632843239/ecommerceAPI/2021-09-28T15-33-55.493Zgiorgio-trovato-K62u25Jk6vo-unsplash.jpg.jpg',
    sales: 4002,
    color: 'black',
  },
  {
    id: '615202e0e987fab59feff1d0',
    name: 'Male polo',
    description:
      "Summer Fashion Men's 3D Printing T-shirt Street Trend Casual Short-Sleeved Loose Oversized Top",
    category: "Men's Fashion",
    stock: 500,
    ratings: 3,
    price: 43,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632764636/ecommerceAPI/2021-09-27T17-43-40.192Zhoward-bouchevereau-YdnaXinPcUo-unsplash.jpg.jpg',
    sales: 32,
    color: 'Black',
  },
  {
    id: '6151fc7fe987fab59feff1c0',
    name: 'White polo',
    description:
      "Male white polo that can be worn on a casual day.\nThe material doesn't fade when washed and it's good on the skin.",
    category: "Men's Fashion",
    stock: 28,
    ratings: 4,
    price: 30,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632763003/ecommerceAPI/2021-09-27T17-16-30.873Zrock-staar-2XcbGfYShfk-unsplash.jpg.jpg',
    sales: 339,
    color: 'White',
  },
  {
    id: '6150cabb5036ff348a9f8a93',
    name: 'Make way',
    description:
      'When it comes to Italian tailoring, this is the ultimate combination of classic heritage and elegant masculinity. This suit features slim cut trousers that just hit the ankle in a flattering slim cut with a front crease. The jacket, in the same elegant blue, features peaked lapels, a front button closure and side flap pockets. Made in Italy',
    category: "Men's Fashion",
    stock: 11,
    ratings: 4,
    price: 250,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632684730/ecommerceAPI/2021-09-26T19-32-06.831Zbenjamin-rascoe-jXzyR6tgd18-unsplash.jpg.jpg',
    sales: 14,
    color: 'blue',
  },
  {
    id: '6150ca1a5036ff348a9f8a91',
    name: 'Male suit',
    description:
      "A suit is globally most accepted attire for a guy without doubt, simply a man,s wardrobe can't get completed without the addition of it. This double breasted suit is a must for every gentleman. It makes you stand out in the crowd. It can be used for various occasions and events",
    category: "Men's Fashion",
    stock: 17,
    ratings: 1,
    price: 250,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632684569/ecommerceAPI/2021-09-26T19-29-28.841Zgez-xavier-mansfield-b34E1vh1tYU-unsplash.jpg.jpg',
    sales: 19,
    color: 'Black',
  },
  {
    id: '6150c6a95036ff348a9f8a89',
    name: '705 sweater',
    description:
      "Thick material, long sleeved.\nThe only available color is black.\nThe material doesn't fade easily.",
    category: "Men's Fashion",
    stock: 11,
    ratings: 4,
    price: 80,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632683687/ecommerceAPI/2021-09-26T19-14-46.409Zryan-hoffman-982Nb-awyVE-unsplash.jpg.jpg',
    sales: 50,
    color: 'Black',
  },
  {
    id: '614fa502d1422dab5311a3e5',
    name: '705 sweater',
    description: 'Woolen unisex sweater.\nThe material feels nice on the skin.',
    category: "Men's Fashion",
    stock: 23,
    ratings: 3,
    price: 100,
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632609536/ecommerceAPI/2021-09-25T22-38-56.054Zryan-hoffman-A7f7XRKgUWc-unsplash.jpg.jpg',
    sales: 18,
    color: 'Black',
  },
];

const Favorites: React.FC<FavoritesProps> = (props) => {
  // hooks
  const dispatch = useDispatch();
  // methods
  const products: CartItem = useSelector(wishlistProducts);

  const handleAddToCart = (product: Product) => {
    const item: CartItem = {
      product: product,
      quantity: 1,
    };
    // add item to cart and remove from wishlist at the same item
    dispatch(addCartItem(item));
    dispatch(removeFromWishlist(product.id));
  };

  const handleRemoveFromWishlist = (productId: string) => {
    dispatch(removeFromWishlist(productId));
  };

  return (
    <div className='favorites'>
      {DUMMY_DATA.map((product) => (
        <UICard
          key={product.id}
          src={product.image}
          name={product.name}
          price={product.price}
          checkout
          onClickAddToCart={() => {
            handleAddToCart(product);
          }}
          onClickDelete={() => {
            handleRemoveFromWishlist(product.id);
          }}
        />
      ))}
    </div>
  );
};

export default Favorites;
