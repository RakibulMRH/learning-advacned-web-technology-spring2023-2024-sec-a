import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cartItem.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemsRepository: Repository<CartItem>,
    private productsService: ProductsService,
  ) {}

  async addToCart(userId: number, productId: number, quantity: number) {
    // Implement logic to add to cart here
  }

  async getCart(userId: number) {
    // Implement logic to get cart here
  }

  async updateCartItem(userId: number, cartItemId: number, quantity: number) {
    // Implement logic to update cart item here
  }

  async removeCartItem(userId: number, cartItemId: number) {
    // Implement logic to remove cart item here
  }

  async clearCart(userId: number) {
    // Implement logic to clear cart here
  }
}