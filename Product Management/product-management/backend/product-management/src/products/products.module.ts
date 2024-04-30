import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity'; 
import { JwtAuthGuard } from  '../auth/guards/jwt-auth.guard';
import { TokenBlacklistService } from '../auth/utils/token-blacklist.service';

@Module({
  providers: [JwtAuthGuard, TokenBlacklistService],
})
export class AuthModule {}
@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [JwtAuthGuard, TokenBlacklistService, ProductsService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}