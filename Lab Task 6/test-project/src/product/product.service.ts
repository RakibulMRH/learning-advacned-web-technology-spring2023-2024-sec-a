import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from 'src/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}
  
  async findAll() {
    //return this.users;
    return await this.productRepo.find({});
  }

  async create(createProductDto: CreateProductDto) {
    const product = this.productRepo.create(createProductDto);
    await this.productRepo.save(product);
    return product;
  }
}