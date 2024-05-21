import { Cart, CartItem } from '../types/cart.types';

export const cartService = {
  getCart: async (): Promise<Cart> => {
     const response = await fetch('/api/cart');
    const data = await response.json();

    if (response.ok) {
      return data.cart;
    } else {
      throw new Error(data.message);
    }
  },

  getCartById: async (id: string): Promise<Cart> => {
    // Send a request to the backend to get a cart by ID
    const response = await fetch(`/api/cart/${id}`);
    const data = await response.json();

    if (response.ok) {
      return data.cart;
    } else {
      throw new Error(data.message);
    }
  },

  addToCart: async (productId: string, quantity: number): Promise<Cart> => {
     const response = await fetch('/api/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId, quantity }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.cart;
    } else {
      throw new Error(data.message);
    }
  },

  updateCartItem: async (itemId: string, quantity: number): Promise<Cart> => {
    // Send a request to the backend to update the quantity of a cart item
    const response = await fetch(`/api/cart/items/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    });

    const data = await response.json();

    if (response.ok) {
      return data.cart;
    } else {
      throw new Error(data.message);
    }
  },

  removeFromCart: async (itemId: string): Promise<Cart> => {
    // Send a request to the backend to remove an item from the cart
    const response = await fetch(`/api/cart/items/${itemId}`, {
      method: 'DELETE',
    });

    const data = await response.json();

    if (response.ok) {
      return data.cart;
    } else {
      throw new Error(data.message);
    }
  },
};