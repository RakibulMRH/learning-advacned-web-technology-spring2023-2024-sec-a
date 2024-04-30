import { useState, useEffect } from 'react';
import { cartService } from '../../services/cart.service';
import { Cart, CartItem } from '../../types/cart.types';

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<Cart | null>(null);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const data = await cartService.getCart();
        setCart(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Cart</h1>
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

export default CartPage;