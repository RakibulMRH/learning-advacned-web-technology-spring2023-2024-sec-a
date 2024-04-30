import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { productsService } from '../../services/products.service';
import { Product } from '../../types/product.types';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await productsService.getProductById(id as string);
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      {/* Add other product details */}
    </div>
  );
};

export default ProductDetailPage;