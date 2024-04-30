import { Controller, Request, Post, UseGuards, Body, Get, Res, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersService } from '../users/users.service';  
import { AuthLoginDto } from './dto/auth-login.dto'; 
import { TokenBlacklistService } from './utils/token-blacklist.service';
import { UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,  
    private tokenBlacklistService: TokenBlacklistService,
  ) {}

  @Post('login')
@UseGuards(LocalAuthGuard)
async login(@Body() user: AuthLoginDto) {
  return this.authService.login(user);
}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('register')
  async register(@Body() authCredentialsDto: AuthCredentialsDto) {
    const existingUser = await this.usersService.findOne(authCredentialsDto.email);
    if (existingUser) {  
      return { message: 'User already exists' };
    }
  
    const user = await this.usersService.create({
      name: authCredentialsDto.name,  
      email: authCredentialsDto.email,
      password: authCredentialsDto.password,
      role: 'user', 
    });
    return { message: 'User created successfully', user };
  }

 @Post('logout')
logout(@Request() req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    throw new UnauthorizedException('Authorization header is missing');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    throw new UnauthorizedException('Token is missing from Authorization header');
  }

  this.tokenBlacklistService.blacklistToken(token);
  // Invalidate the session or do other cleanup
}
}