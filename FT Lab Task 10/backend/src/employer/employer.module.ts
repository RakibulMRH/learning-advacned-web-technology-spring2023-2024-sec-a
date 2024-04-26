import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployerController } from './employer.controller';
import { EmployerService } from './employer.service';
import { EmployerEntity } from '../entities/employer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployerEntity])],
  controllers: [EmployerController],
  providers: [EmployerService],
})
export class EmployerModule {}