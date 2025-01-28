import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  CartItems: [],
};

const cartReducer = (state, action) => {
  // console.log("hello", action);
  switch (action.type) {
    case "AddToCart": {
      const isExisting = state.CartItems.find(
        (item) => item.id === action.payload.id
      );

      if (isExisting) {
        let updatedProduct = state.CartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });

        return {
          ...state,
          CartItems: updatedProduct,
        };
        // .............................................
      } else {
        const newCartItems = {
          ...action.payload,
          qty: 1,
        };

        const newCartItemsProduct = [...state.CartItems, newCartItems];

        return {
          ...state,
          CartItems: newCartItemsProduct,
        };
      }
    }

    case "Increment": {
      // console.log(action.payload);
      const updatedData = state.CartItems.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: updatedData,
      };
    }

    case "Decrement": {
      const DecrementUpdatedItem = state.CartItems.map((item) => {
        if (item.id === action.payload.id && item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        } else {
          return item;
        }
      });
      return {
        ...state,
        CartItems: DecrementUpdatedItem,
      };
    }

    case "Delete": {
      const filterProduct = state.CartItems.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
      return { ...state, CartItems: filterProduct };
    }

    case "EmptyCart": {
      return { ...state, CartItems: [] };
    }

    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
