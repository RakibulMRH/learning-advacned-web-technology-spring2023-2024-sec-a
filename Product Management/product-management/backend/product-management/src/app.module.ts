import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';  
import { BlacklistMiddleware } from './auth/middleware/blacklist.middleware';
import { TokenBlacklistService } from './auth/utils/token-blacklist.service';
 

@Module({
  imports: [AuthModule, CartModule, DatabaseModule, ProductsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService ,TokenBlacklistService ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(BlacklistMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}