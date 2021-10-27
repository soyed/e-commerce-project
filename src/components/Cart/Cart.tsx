import React from 'react';
import './Cart.scss';
import CartItem from './CartItem/CartItem';

interface CartProps {}

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
];

const Cart: React.FC<CartProps> = (props) => {
  return (
    <div className='cart'>
      <div className='cart__container'>
        <div className='cart__container-1'>
          <h2 className='cart__container-1__text'>My Cart</h2>
        </div>
        <div className='cart__container-2'>
          {DUMMY_DATA.map((data) => (
            <CartItem
              key={data.id}
              productImg={data.image}
              productName={data.name}
              productPrice={data.price}
              productColor={data.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
