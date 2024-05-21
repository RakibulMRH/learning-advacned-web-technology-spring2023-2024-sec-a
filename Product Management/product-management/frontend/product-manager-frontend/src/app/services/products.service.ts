import { Product } from '../types/product.types';

export const productsService = {
  getProducts: async (): Promise<Product[]> => {
    // Send a request to the backend to get all products
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
  
      if (response.ok) {
        return data; // Return the data directly
      } else {
        throw new Error('Failed to fetch products');
      }
    },

    getProductById: async (id: string): Promise<Product> => {
      console.log(`Fetching product with ID: ${id}`);
      // Check if the id parameter is empty, undefined, or null
  if (!id || id === '' || isNaN(Number(id))) {
    throw new Error('Invalid product ID');
  }

  const numericId = Number(id);

  const response = await fetch(`http://localhost:3001/products/${numericId}`);
  const data = await response.json();

  if (response.ok) {
    return data;
  } else if (response.status === 404) {
    throw new Error('Product not found');
  } else {
    throw new Error(`Failed to fetch product: ${response.status}`);
  }
},
    
  createProduct: async (product: { name: string; description: string; price: number }): Promise<Product> => {
    // Send a request to the backend to create a new product
    const response = await fetch('http://localhost:3001/products', {
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