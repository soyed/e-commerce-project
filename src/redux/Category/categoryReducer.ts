import { getCategories } from '../../services/API/API';
import { fetchCategory } from './categoryActionCreators';
import CategoryActionTypes from './categoryActions';

const tem = {
  categories: [
    {
      _id: '614b6311cb72a9d1d2ddcec7',
      category_name: 'Home, Pet & Appliances',
      category_id: 'HomePetAppliance',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330512/ecommerceAPI/2021-09-22T17-08-31.305Zcouch.png.png',
      ],
      createdAt: '2021-09-22T17:08:33.462Z',
      updatedAt: '2021-09-22T17:08:33.462Z',
      __v: 0,
    },
    {
      _id: '614b6339cb72a9d1d2ddcec9',
      category_name: "Women's Fashion",
      category_id: 'WomensFashion',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330552/ecommerceAPI/2021-09-22T17-09-11.344Zfemale-dress.png.png',
      ],
      createdAt: '2021-09-22T17:09:13.233Z',
      updatedAt: '2021-09-22T17:09:13.233Z',
      __v: 0,
    },
    {
      _id: '614b635acb72a9d1d2ddcecb',
      category_name: "Men's Fashion",
      category_id: 'MensFashion',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330586/ecommerceAPI/2021-09-22T17-09-44.623Zshirt.png.png',
      ],
      createdAt: '2021-09-22T17:09:46.908Z',
      updatedAt: '2021-09-22T17:09:46.908Z',
      __v: 0,
    },
    {
      _id: '614b63a8cb72a9d1d2ddcecd',
      category_name: 'Phones & Telecommunications',
      category_id: 'PhonesTelecommunications',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330663/ecommerceAPI/2021-09-22T17-11-02.519Zsmartphone.png.png',
      ],
      createdAt: '2021-09-22T17:11:04.688Z',
      updatedAt: '2021-09-22T17:11:04.688Z',
      __v: 0,
    },
    {
      _id: '614b63c2cb72a9d1d2ddcecf',
      category_name: 'Computer, Office & Security',
      category_id: 'ComputerOfficeSecurity',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330689/ecommerceAPI/2021-09-22T17-11-29.194Zcomputer.png.png',
      ],
      createdAt: '2021-09-22T17:11:30.894Z',
      updatedAt: '2021-09-22T17:11:30.894Z',
      __v: 0,
    },
    {
      _id: '614b63e4cb72a9d1d2ddced1',
      category_name: 'Consumer Electronics',
      category_id: 'ConsumerElectronics',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330723/ecommerceAPI/2021-09-22T17-12-02.990Zcamera.png.png',
      ],
      createdAt: '2021-09-22T17:12:04.585Z',
      updatedAt: '2021-09-22T17:12:04.585Z',
      __v: 0,
    },
    {
      _id: '614b6408cb72a9d1d2ddced3',
      category_name: 'Jewelry & Watches',
      category_id: 'JewelryWatches',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330760/ecommerceAPI/2021-09-22T17-12-38.906Zring.png.png',
      ],
      createdAt: '2021-09-22T17:12:40.980Z',
      updatedAt: '2021-09-22T17:12:40.980Z',
      __v: 0,
    },
    {
      _id: '614b6420cb72a9d1d2ddced5',
      category_name: 'Bags & Shoes',
      category_id: 'BagsShoes',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330783/ecommerceAPI/2021-09-22T17-13-02.484Zhandbag.png.png',
      ],
      createdAt: '2021-09-22T17:13:04.007Z',
      updatedAt: '2021-09-22T17:13:04.007Z',
      __v: 0,
    },
    {
      _id: '614b6449cb72a9d1d2ddced7',
      category_name: 'Toys, Kids & Babies',
      category_id: 'ToysKidsBabies',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330824/ecommerceAPI/2021-09-22T17-13-42.368Zfeeding-bottle.png.png',
      ],
      createdAt: '2021-09-22T17:13:45.589Z',
      updatedAt: '2021-09-22T17:13:45.589Z',
      __v: 0,
    },
    {
      _id: '614b6468cb72a9d1d2ddced9',
      category_name: 'Outdoor Fun & Sports',
      category_id: 'OutdoorFunSports',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330855/ecommerceAPI/2021-09-22T17-14-14.264Zbasketball-ball.png.png',
      ],
      createdAt: '2021-09-22T17:14:16.110Z',
      updatedAt: '2021-09-22T17:14:16.110Z',
      __v: 0,
    },
    {
      _id: '614b6483cb72a9d1d2ddcedb',
      category_name: 'Beauty, Health & Hair',
      category_id: 'BeautyHealthHair',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330883/ecommerceAPI/2021-09-22T17-14-42.616Zbeauty.png.png',
      ],
      createdAt: '2021-09-22T17:14:43.990Z',
      updatedAt: '2021-09-22T17:14:43.990Z',
      __v: 0,
    },
    {
      _id: '614b649dcb72a9d1d2ddcedd',
      category_name: 'Home Improvement & Tools',
      category_id: 'HomeImprovementTools',
      image: [
        'https://res.cloudinary.com/elouisramsey/image/upload/v1632330908/ecommerceAPI/2021-09-22T17-15-07.279Zimprovement.png.png',
      ],
      createdAt: '2021-09-22T17:15:09.127Z',
      updatedAt: '2021-09-22T17:15:09.127Z',
      __v: 0,
    },
  ],
  pageName: 'List of categories',
  numberOfCategories: 12,
};

const initialState = {
  status: false,
  entities: {},
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CategoryActionTypes.FETCH_CATEGORIES:
      return { ...state, entities: action.payload };
    case CategoryActionTypes.LOADING_CATEGORIES:
      return { ...state, status: !state.status };
    default:
      return state;
  }
};

export default categoryReducer;
