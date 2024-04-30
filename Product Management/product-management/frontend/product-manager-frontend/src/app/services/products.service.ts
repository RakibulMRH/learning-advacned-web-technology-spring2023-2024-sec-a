import { Product } from '../types/product.types';

export const productsService = {
  getProducts: async (): Promise<Product[]> => {
    // Send a request to the backend to get all products
    const response = await fetch('/api/products');
    const data = await response.json();

    if (response.ok) {
      return data.products;
    } else {
      throw new Error(data.message);
    }
  },

  getProductById: async (id: string): Promise<Product> => {
    // Send a request to the backend to get a product by ID
    const response = await fetch(`/api/products/${id}`);
    const data = await response.json();

    if (response.ok) {
      return data.product;
    } else {
      throw new Error(data.message);
    }
  },

  createProduct: async (product: { name: string; description: string; price: number }): Promise<Product> => {
    // Send a request to the backend to create a new product
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });

    const data = await response.json();

    if (response.ok) {
      return data.product;
    } else {
      throw new Error(data.message);
    }
  },
};