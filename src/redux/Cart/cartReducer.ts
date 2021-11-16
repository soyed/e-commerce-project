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

      const newItemCount = state.itemCount + quantity;

      //  get existing item index and existing item
      const existingItemId = state.products.findIndex(
        (item) => item.product.id === product.id
      );
      const existingItem = state.products.find(
        (item) => item.product.id === product.id
      );

      let newProducts;

      if (existingItemId !== -1) {
        const newProduct = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        newProducts = [...state.products];
        newProducts[existingItemId] = newProduct;
      } else {
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
        (item) => item.product.id === productId
      );

      const existingProductId = state.products.findIndex(
        (item) => item.product.id === productId
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

    case cartActions.DELETE_FROM_CART:
      // deleting an item from cart
      const { productId: Id } = action.payload;

      // find the existing product
      const productToDeleteId = state.products.findIndex(
        (item) => item.product.id === Id
      );

      const productToDelete = state.products.find(
        (item) => item.product.id === Id
      );

      if (productToDeleteId === -1) {
        return { ...state };
      }

      const filteredProducts = state.products.filter(
        (item) => item.product.id !== Id
      );
      const totalToDelete =
        productToDelete.product.price * productToDelete.quantity;

      return {
        ...state,
        itemCount: state.itemCount - productToDelete.quantity,
        products: filteredProducts,
        totalPrice: state.totalPrice - totalToDelete,
      };
    case cartActions.CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default cartReducer;
