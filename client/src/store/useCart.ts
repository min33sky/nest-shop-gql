import create from 'zustand';
import { Product } from '../graphql/types';

type ProductWithQuantity = Product & { quantity: number };

interface CartState {
  productsInCart: ProductWithQuantity[];
  total: number;
  cartOpen: boolean;
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (product: Product) => void;
  openCart: () => void;
  closeCart: () => void;
}

const useCart = create<CartState>((set) => ({
  productsInCart: [],
  total: 0, // total price of all items in cart
  cartOpen: false,
  addProductToCart: (product: Product) => {
    set((state) => {
      const productsInCart = [...state.productsInCart];
      const productInCart = productsInCart.find((p) => p.id === product.id);
      if (productInCart) {
        productInCart.quantity += 1;
        return {
          ...state,
          productsInCart,
          total: state.total + product.price,
        };
      } else {
        productsInCart.push({ ...product, quantity: 1 });
        return {
          ...state,
          productsInCart,
          total: state.total + product.price,
        };
      }
    });
  },
  removeProductFromCart: (product: Product) => {
    set((state) => {
      const productsInCart = [...state.productsInCart];
      const productInCart = productsInCart.find((p) => p.id === product.id);
      if (productInCart) {
        if (productInCart.quantity > 1) {
          productInCart.quantity -= 1;
          return {
            ...state,
            productsInCart,
            total: state.total - product.price,
          };
        } else {
          return {
            ...state,
            productsInCart: productsInCart.filter((p) => p.id !== product.id),
            total: state.total - product.price,
          };
        }
      } else {
        return state;
      }
    });
  },
  openCart: () => {
    set((state) => ({ ...state, cartOpen: true }));
  },
  closeCart: () => {
    set((state) => ({ ...state, cartOpen: false }));
  },
}));

export default useCart;
