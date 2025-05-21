import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    if (serializedCart === null) return { items: [] };
    return JSON.parse(serializedCart);
  } catch (e) {
    console.warn("Failed to load cart from localStorage:", e);
    return { items: [] };
  }
};

const saveCartToLocalStorage = (cartState) => {
  try {
    const serializedCart = JSON.stringify(cartState);
    localStorage.setItem("cart", serializedCart);
  } catch (e) {
    console.warn("Failed to save cart to localStorage:", e);
  }
};

const initialState = loadCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingIndex !== -1) {
        state.items[existingIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      saveCartToLocalStorage(state);  
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
      );
      saveCartToLocalStorage(state);  
    },
  
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state); 
    },
     
   updateQuantity: (state, action) => {
      const { id, size, quantity } = action.payload;
      const item = state.items.find(
        (item) => item.id === id && item.size === size
      );
      if (item && quantity >= 1) {
        item.quantity = quantity;
      }
    }
  },
});

export const { addToCart, removeFromCart, clearCart , updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
