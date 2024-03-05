import { IsNumber, IsString } from 'class-validator';


export class CreateProductDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
  @IsNumber()
  price: number;
}