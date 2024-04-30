import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './entities/cart.entity';
import { CartItem } from './entities/cartItem.entity';
import { ProductsModule } from '../products/products.module';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { TokenBlacklistService } from '../auth/utils/token-blacklist.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart, CartItem]),
    ProductsModule,UsersModule
  ],
  providers: [JwtAuthGuard, TokenBlacklistService, CartService],
  controllers: [CartController],
})
export class CartModule {}