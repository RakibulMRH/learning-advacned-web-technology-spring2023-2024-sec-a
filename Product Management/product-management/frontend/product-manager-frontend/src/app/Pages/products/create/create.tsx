'use client';
import { useState } from 'react';
import { productsService } from '../../../services/products.service';
import { useRouter } from 'next/navigation';

const CreateProductPage: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);

  const handleCreateProduct = async () => {
    try {
      await productsService.createProduct({ name, description, price });
      router.push('/products');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Product</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
      />
      <button onClick={handleCreateProduct}>Create</button>
    </div>
  );
};

export default CreateProductPage;