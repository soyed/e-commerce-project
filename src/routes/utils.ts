export enum RouteType {
  SOCIAL = 'social',
  COMMERCE = 'commerce',
}

export enum LinkPath {
  UNIVERSAL = '/',
  HOME = '/home',
  MARKET = '/shop/market-place',
  SHOP = '/shop',
  // Information
  FAQ = '/faq',
  SHIPPING = '/shipping',
  CONTACT = '/contact',
  BUYING_OPTIONS = '/buying-options',

  // Accounts Validation
  SIGN_IN = 'account/sign-in',
  SIGN_UP = 'account/sign-up',

  // Commerce Section
  ACCOUNT = '/account',
  FAVORITES = '/favorites',
  CART = '/cart',
  CATEGORIES = '/shop/categories',
  CATEGORY_PRODUCTS = '/shop/:categoryId/products',
  PRODUCT_PAGE = '/shop/:categoryId/products/:productId',

  // MarketPlace Section
  MARKET_PLACE = '/shop/market-place/categories',
  MARKET_PLACE_PRODUCTS = '/shop/market-place/:categoryId/products',
  MARKET_PRODUCT_PAGE = '/shop/market-place/:categoryId/products/:productId',

  // NOT Found
  NOTFOUND = '*',
}

export enum SocialLink {
  FACEBOOK = 'https://www.facebook.com',
  TWITTER = 'https://www.twitter.com',
  LINKEDIN = 'https://www.linkedin.com/in/samuel-oyediran-823450181/',
  GITHUB = 'https://www.github.com/soyed',
  INSTAGRAM = 'https://www.instagram.com',
  TWEETME = 'https://twitter.com/AnonCoder45',
}
