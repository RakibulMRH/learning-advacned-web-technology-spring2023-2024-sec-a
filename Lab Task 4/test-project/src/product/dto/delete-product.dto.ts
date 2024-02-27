//delete

import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DeleteProductDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
