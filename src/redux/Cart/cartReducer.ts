import cartActions from './CartActions';

const initialState = { itemCount: 0, totalPrice: 0, products: [] };

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case cartActions.ADD_TO_CART:
      // check for exiting items first
      // in the case the item does not exit simply add the product to products array
      const { product, quantity } = action.payload.item;
      const totalPrice = product.price * quantity;
      const newTotalPrice = totalPrice + state.totalPrice;

      const newItemCount = state.itemCount + 1;

      //  get existing item index and existing item
      const existingItemId = state.products.findIndex(
        (item) => item.id === product.id
      );
      const existingItem = state.products.find(
        (item) => item.id === product.id
      );

      let newProducts;

      if (existingItemId !== -1) {
        const newProduct = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        debugger;
        newProducts = [...state.products];
        newProducts[existingItemId] = newProduct;
      } else {
        debugger;
        newProducts = [...state.products];
        newProducts = newProducts.concat(action.payload.item);
      }

      return {
        ...state,
        products: newProducts,
        itemCount: newItemCount,
        totalPrice: newTotalPrice,
      };
    case cartActions.REMOVE_FROM_CART:
      const { productId } = action.payload;

      // Get the existing cart item to remove and id
      const existingProduct = state.products.find(
        (product) => product.id === productId
      );

      const existingProductId = state.products.findIndex(
        (product) => product.id === productId
      );

      const itemCount = state.itemCount - 1;
      const total = state.totalPrice - existingProduct.product.price;

      let updatedProducts;

      // check the quantity for the item
      if (existingProduct.quantity === 1) {
        updatedProducts = state.products.filter(
          (product) => product !== productId
        );
      } else {
        const updateProduct = {
          ...existingProduct,
          quantity: existingProduct.quantity - 1,
        };

        // create copy of existing products and update index for the mutated Product
        updatedProducts = [...state.products];
        updatedProducts[existingProductId] = updateProduct;
      }

      // update the total amount and item count for the cart
      return { ...state, itemCount: itemCount, totalPrice: total };
    case cartActions.CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
