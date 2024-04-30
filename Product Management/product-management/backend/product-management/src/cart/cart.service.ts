import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cartItem.entity';
import { ProductsService } from '../products/products.service'; 
import { UsersService } from '../users/users.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
    @InjectRepository(CartItem)
    private cartItemsRepository: Repository<CartItem>,
    private productsService: ProductsService,
    private userService: UsersService,
  ) {}

  async getCart(userId: number) {
    return this.cartsRepository.createQueryBuilder('cart')
      .innerJoinAndSelect('cart.cartItems', 'cartItem')
      .innerJoinAndSelect('cartItem.product', 'product')
      .innerJoin('cart.user', 'user')
      .where('user.id = :userId', { userId })
      .getOne();
  }

  async addToCart(userId: number, productId: number, quantity: number) {
    const product = await this.productsService.findOne(productId);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    let cart = await this.cartsRepository.createQueryBuilder('cart')
      .innerJoin('cart.user', 'user')
      .where('user.id = :userId', { userId })
      .getOne();

    if (!cart) {
      // Assuming you have a UserService to get the user
      const user = await this.userService.findById(userId);
      cart = this.cartsRepository.create({ user: user });
      await this.cartsRepository.save(cart);
    }

    const cartItem = this.cartItemsRepository.create({
      cart: cart,
      product: product,
      quantity: quantity,
    });

    await this.cartItemsRepository.save(cartItem);
  }

  async updateCartItem(userId: number, cartItemId: number, quantity: number) {
    const cartItem = await this.cartItemsRepository.createQueryBuilder('cartItem')
      .innerJoin('cartItem.cart', 'cart')
      .innerJoin('cart.user', 'user')
      .where('cartItem.id = :cartItemId', { cartItemId })
      .andWhere('user.id = :userId', { userId })
      .getOne();

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    cartItem.quantity = quantity;

    await this.cartItemsRepository.save(cartItem);
  }

  async removeCartItem(userId: number, cartItemId: number) {
    const cartItem = await this.cartItemsRepository.createQueryBuilder('cartItem')
      .innerJoin('cartItem.cart', 'cart')
      .innerJoin('cart.user', 'user')
      .where('cartItem.id = :cartItemId', { cartItemId })
      .andWhere('user.id = :userId', { userId })
      .getOne();

    if (!cartItem) {
      throw new NotFoundException('Cart item not found');
    }

    await this.cartItemsRepository.remove(cartItem);
  }
  async clearCart(userId: number) {
    const cart = await this.cartsRepository.createQueryBuilder('cart')
      .innerJoin('cart.user', 'user')
      .where('user.id = :userId', { userId })
      .getOne();
  
    if (!cart) {
      throw new NotFoundException('Cart not found');
    }
  
    await this.cartItemsRepository.createQueryBuilder()
      .delete()
      .from(CartItem)
      .where("cartId = :cartId", { cartId: cart.id })
      .execute();
  }
}