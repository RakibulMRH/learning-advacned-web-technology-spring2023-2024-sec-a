import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { cartService } from '../../services/cart.service';
import { Cart, CartItem } from '../../types/cart.types';

const CartDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await cartService.getCartById(id as string);
        setCart(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, [id]);

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cart Details</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: {cart.total}</p>
    </div>
  );
};

export default CartDetailPage;