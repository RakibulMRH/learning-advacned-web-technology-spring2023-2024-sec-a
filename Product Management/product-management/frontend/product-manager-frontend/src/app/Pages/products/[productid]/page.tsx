'use client';
import { productsService } from '../../../services/products.service';
import { Product } from '../../../types/product.types';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

ProductDetails.getInitialProps = async ({ query }: { query: any }) => {
  const { productId } = query;

  // Check if productId is a numeric string
  if (!/^\d+$/.test(productId)) {
    console.error(`Invalid product ID: ${productId}`);
    return { product: null };
  }

  const product = await productsService.getProductById((productId));

  return { product };
};