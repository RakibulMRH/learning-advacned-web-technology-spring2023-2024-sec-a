import { IsNotEmpty, IsEmail } from 'class-validator';

export class AuthLoginDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
 
  @IsNotEmpty()
  password: string;
}