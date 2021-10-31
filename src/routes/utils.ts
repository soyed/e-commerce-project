export enum RouteType {
  SOCIAL = 'social',
  COMMERCE = 'commerce',
}

export enum LinkPath {
  UNIVERSAL = '/',
  HOME = '/home',
  SHOP = '/shop',
  // Information
  FAQ = '/faq',
  SHIPPING = '/shipping',
  CONTACT = '/contact',
  BUYING_OPTIONS = '/buying-options',

  // Accounts Validation
  SIGN_IN = '/identify/sign-in',
  SIGN_UP = '/identify/sign-up',

  // Commerce Section
  ACCOUNT = '/account',
  FAVORITES = '/favorites',
  CART = '/cart',
  MEN = '/shop/men',
  WOMEN = '/shop/women',
  MARKET_PLACE = '/shop/market-place',
  CATEGORIES = '/shop/categories',
  CATEGORY_PRODUCTS = '/shop/:categoryId/products',
  PRODUCT_PAGE = '/shop/:categoryId/products/:productId',
  TOP_RATED_PRODUCTS = 'shop/products?search=topRated',
  TOP_RATED_BRANDS = 'shop/brands?search=top',
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
