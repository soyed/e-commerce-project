import { STATUS } from '../Category/utils';
import productActions from './productActions';

const temp = {
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
  platform: 'Commerce',
  similarProducts: [
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
      platform: 'Commerce',
    },
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
      platform: 'Commerce',
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
      platform: 'Commerce',
    },
    {
      id: '614fa502d1422dab5311a3e5',
      name: '705 sweater',
      description:
        'Woolen unisex sweater.\nThe material feels nice on the skin.',
      category: "Men's Fashion",
      stock: 23,
      ratings: 3,
      price: 100,
      image:
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632609536/ecommerceAPI/2021-09-25T22-38-56.054Zryan-hoffman-A7f7XRKgUWc-unsplash.jpg.jpg',
      sales: 18,
      color: 'Black',
      platform: 'Commerce',
    },
  ],
};

const initialState = {
  status: STATUS.IDLE,
  errorMessage: '',
  //   product: {},
  product: temp,
};

const productReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case productActions.FETCH_PRODUCT:
      return { ...state, product: action.payload.product };
    case productActions.PRODUCT_STATUS:
      return { ...state, status: action.payload.status };
    case productActions.PRODUCT_FAILED:
      return { ...state, errorMessage: action.payload.errorMessage };
    default:
      return state;
  }
};

export default productReducer;
