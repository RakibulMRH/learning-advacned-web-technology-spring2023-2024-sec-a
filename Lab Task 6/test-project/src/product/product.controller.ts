import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsGuard } from './product.guard';
import { MyInterceptor } from './product.interceptor';

@Controller('products')
@UseInterceptors(MyInterceptor)
@UseGuards(ProductsGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getAll() {
    return this.productService.findAll();
  }

  @Post('create')
    async create(@Body() createProductDto: CreateProductDto) {
      return this.productService.create(createProductDto);
    }
  }


 
