import { Controller, Post, Body, Get, Param, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add')
  async addToCart(@Request() req, @Body() addToCartDto: AddToCartDto) {
    return this.cartService.addToCart(req.user.userId, addToCartDto.productId, addToCartDto.quantity);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCart(@Request() req) {
    return this.cartService.getCart(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':cartItemId')
  async updateCartItem(@Request() req, @Param('cartItemId') cartItemId: number, @Body('quantity') quantity: number) {
    return this.cartService.updateCartItem(req.user.userId, cartItemId, quantity);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':cartItemId')
  async removeCartItem(@Request() req, @Param('cartItemId') cartItemId: number) {
    return this.cartService.removeCartItem(req.user.userId, cartItemId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async clearCart(@Request() req) {
    return this.cartService.clearCart(req.user.userId);
  }
}