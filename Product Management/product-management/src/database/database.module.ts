import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../../ormconfig';
import { User } from '../users/entities/user.entity';
import { Product } from '../products/entities/product.entity';
import { Cart } from '../cart/entities/cart.entity';
import { CartItem } from '../cart/entities/cartItem.entity';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        database: 'awt',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'mrh',
        entities: [User, Product, Cart, CartItem],
        synchronize: true, // Don't use this in production
      }),
    ],
  })
  export class DatabaseModule {}