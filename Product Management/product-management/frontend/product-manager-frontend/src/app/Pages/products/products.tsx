'use client';
import { useState, useEffect } from 'react';
import { productsService } from '../../services/products.service';
import { Product } from '../../types/product.types';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productsService.getProducts();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProducts();
  }, []);

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
  };

  const thStyle: React.CSSProperties = {
    borderBottom: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  };

  const tdStyle: React.CSSProperties = {
    borderBottom: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <div>
      <h1>Products</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Description</th>
            <th style={thStyle}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products && products.map((product) => (
            <tr key={product.id}>
              <td style={tdStyle}>{product.id}</td>
              <td style={tdStyle}>{product.name}</td>
              <td style={tdStyle}>{product.description}</td>
              <td style={tdStyle}>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductsPage;