import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from 'ormconfig.json';
import { getConnectionManager } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const connectionManager = getConnectionManager();
  const conn = connectionManager.create(ormconfig as any);
  await conn.connect();
  await conn.synchronize(true);

  await app.listen(3000);
}
bootstrap();