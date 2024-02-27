import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
    private product = [
        {
          id: 1,
          name: 'alamin',
          email: 'alain@aiub.edu',
          password: 'xyz',
        },
        {
          id: 2,
          name: 'abc',
          email: 'abc@aiub.edu',
          password: '123',
        },
        {
          id: 3,
          name: 'pqr',
          email: 'pqr@aiub.edu',
          password: 'pqr',
        },
      ];
    
      findAll() {
        return this.product;
      }
    
      findById(id: number) {
        return this.product.find((user) => user.id === id);
      }
    
      create(createProductDto: CreateProductDto) {
        const lastId = [...this.product].sort((a, b) => b.id - a.id);
        const newUser = {
          id: lastId[0].id + 1,
          ...createProductDto,
        };
        this.product.push(newUser);
        return newUser;
      }
      
      updateProduct(id: number, updateProductDto: UpdateProductDto) {
        const product = this.findById(id);
        if (!product) {
          throw new Error('Product not found');
        }
    
        // Update the product
        Object.assign(product, updateProductDto);
        return product;
      }

      deleteProduct(id: number) {
        const product = this.findById(id);
        if (!product) {
          throw new Error('Product not found');
        }
    
        // Delete the product
        this.product = this.product.filter((product) => product.id !== id);
        return this.product;
      }
}
