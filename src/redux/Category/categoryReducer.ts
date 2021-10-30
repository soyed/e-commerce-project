import { getCategories } from '../../services/API/API';
import CategoryActionTypes from './categoryActions';
import { STATUS } from './utils';

const tem = [
  {
    id: '614b6311cb72a9d1d2ddcec7',
    categoryName: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330512/ecommerceAPI/2021-09-22T17-08-31.305Zcouch.png.png',
  },
  {
    id: '614b6339cb72a9d1d2ddcec9',
    categoryName: "Women's Fashion",
    categoryId: 'WomensFashion',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330552/ecommerceAPI/2021-09-22T17-09-11.344Zfemale-dress.png.png',
  },
  {
    id: '614b635acb72a9d1d2ddcecb',
    categoryName: "Men's Fashion",
    categoryId: 'MensFashion',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330586/ecommerceAPI/2021-09-22T17-09-44.623Zshirt.png.png',
  },
  {
    id: '614b63a8cb72a9d1d2ddcecd',
    categoryName: 'Phones & Telecommunications',
    categoryId: 'PhonesTelecommunications',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330663/ecommerceAPI/2021-09-22T17-11-02.519Zsmartphone.png.png',
  },
  {
    id: '614b63c2cb72a9d1d2ddcecf',
    categoryName: 'Computer, Office & Security',
    categoryId: 'ComputerOfficeSecurity',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330689/ecommerceAPI/2021-09-22T17-11-29.194Zcomputer.png.png',
  },
  {
    id: '614b63e4cb72a9d1d2ddced1',
    categoryName: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330723/ecommerceAPI/2021-09-22T17-12-02.990Zcamera.png.png',
  },
  {
    id: '614b6408cb72a9d1d2ddced3',
    categoryName: 'Jewelry & Watches',
    categoryId: 'JewelryWatches',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330760/ecommerceAPI/2021-09-22T17-12-38.906Zring.png.png',
  },
  {
    id: '614b6420cb72a9d1d2ddced5',
    categoryName: 'Bags & Shoes',
    categoryId: 'BagsShoes',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330783/ecommerceAPI/2021-09-22T17-13-02.484Zhandbag.png.png',
  },
  {
    id: '614b6449cb72a9d1d2ddced7',
    categoryName: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330824/ecommerceAPI/2021-09-22T17-13-42.368Zfeeding-bottle.png.png',
  },
  {
    id: '614b6468cb72a9d1d2ddced9',
    categoryName: 'Outdoor Fun & Sports',
    categoryId: 'OutdoorFunSports',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330855/ecommerceAPI/2021-09-22T17-14-14.264Zbasketball-ball.png.png',
  },
  {
    id: '614b6483cb72a9d1d2ddcedb',
    categoryName: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330883/ecommerceAPI/2021-09-22T17-14-42.616Zbeauty.png.png',
  },
  {
    id: '614b649dcb72a9d1d2ddcedd',
    categoryName: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330908/ecommerceAPI/2021-09-22T17-15-07.279Zimprovement.png.png',
  },
];

const commerce = [
  {
    id: '614b6339cb72a9d1d2ddcec9',
    categoryName: "Women's Fashion",
    categoryId: 'WomensFashion',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330552/ecommerceAPI/2021-09-22T17-09-11.344Zfemale-dress.png.png',
  },
  {
    id: '614b635acb72a9d1d2ddcecb',
    categoryName: "Men's Fashion",
    categoryId: 'MensFashion',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330586/ecommerceAPI/2021-09-22T17-09-44.623Zshirt.png.png',
  },
  {
    id: '614b6408cb72a9d1d2ddced3',
    categoryName: 'Jewelry & Watches',
    categoryId: 'JewelryWatches',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330760/ecommerceAPI/2021-09-22T17-12-38.906Zring.png.png',
  },
  {
    id: '614b6420cb72a9d1d2ddced5',
    categoryName: 'Bags & Shoes',
    categoryId: 'BagsShoes',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330783/ecommerceAPI/2021-09-22T17-13-02.484Zhandbag.png.png',
  },
];

const marketplace = [
  {
    id: '614b6311cb72a9d1d2ddcec7',
    categoryName: 'Home, Pet & Appliances',
    categoryId: 'HomePetAppliance',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330512/ecommerceAPI/2021-09-22T17-08-31.305Zcouch.png.png',
  },
  {
    id: '614b63a8cb72a9d1d2ddcecd',
    categoryName: 'Phones & Telecommunications',
    categoryId: 'PhonesTelecommunications',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330663/ecommerceAPI/2021-09-22T17-11-02.519Zsmartphone.png.png',
  },
  {
    id: '614b63c2cb72a9d1d2ddcecf',
    categoryName: 'Computer, Office & Security',
    categoryId: 'ComputerOfficeSecurity',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330689/ecommerceAPI/2021-09-22T17-11-29.194Zcomputer.png.png',
  },
  {
    id: '614b63e4cb72a9d1d2ddced1',
    categoryName: 'Consumer Electronics',
    categoryId: 'ConsumerElectronics',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330723/ecommerceAPI/2021-09-22T17-12-02.990Zcamera.png.png',
  },
  {
    id: '614b6449cb72a9d1d2ddced7',
    categoryName: 'Toys, Kids & Babies',
    categoryId: 'ToysKidsBabies',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330824/ecommerceAPI/2021-09-22T17-13-42.368Zfeeding-bottle.png.png',
  },
  {
    id: '614b6468cb72a9d1d2ddced9',
    categoryName: 'Outdoor Fun & Sports',
    categoryId: 'OutdoorFunSports',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330855/ecommerceAPI/2021-09-22T17-14-14.264Zbasketball-ball.png.png',
  },
  {
    id: '614b6483cb72a9d1d2ddcedb',
    categoryName: 'Beauty, Health & Hair',
    categoryId: 'BeautyHealthHair',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330883/ecommerceAPI/2021-09-22T17-14-42.616Zbeauty.png.png',
  },
  {
    id: '614b649dcb72a9d1d2ddcedd',
    categoryName: 'Home Improvement & Tools',
    categoryId: 'HomeImprovementTools',
    image:
      'https://res.cloudinary.com/elouisramsey/image/upload/v1632330908/ecommerceAPI/2021-09-22T17-15-07.279Zimprovement.png.png',
  },
];

const initialState = {
  status: STATUS.IDLE,
  message: '',
  // caetgories: [],
  commerce: commerce,
  marketPlace: marketplace,
  // categories: tem,
  categoriesLength: 0,
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        commerce: action.payload.categories[0],
        marketPlace: action.payload.categories[1],
        categoriesLength: action.payload.categories?.length,
      };
    case CategoryActionTypes.LOADING_CATEGORIES:
      return { ...state, status: action.payload.status };
    case CategoryActionTypes.FAILED_CATEGORIES:
      return { ...state, errorMessage: action.payload.message };
    default:
      return state;
  }
};

export default categoryReducer;
