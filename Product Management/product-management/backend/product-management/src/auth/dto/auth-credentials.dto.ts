//auth.credentials.dto.ts
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
    @IsString() 
    name: string;

    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;
    }