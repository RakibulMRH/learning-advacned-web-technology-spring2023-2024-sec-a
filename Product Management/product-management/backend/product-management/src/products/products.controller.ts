import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.price = createProductDto.price;
    product.stock = createProductDto.stock;
    return this.productsService.create(product);
  }

  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard) 
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    const product = await this.productsService.findOne(+id);
    if (updateProductDto.name) {
      product.name = updateProductDto.name;
    }
    if (updateProductDto.description) {
      product.description = updateProductDto.description;
    }
    if (updateProductDto.price) {
      product.price = updateProductDto.price;
    }
    if (updateProductDto.stock) {
      product.stock = updateProductDto.stock;
    }
    return this.productsService.update(+id, product);
  }

  @Roles(Role.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard) 
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}