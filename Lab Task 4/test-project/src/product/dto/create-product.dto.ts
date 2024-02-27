import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class CreateProductDto {
    id: number;
    @IsString({message: 'Valid name is required'})
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    password: string;
}