import { Controller, Request, Post, UseGuards, Body, Get, Res, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { UsersService } from '../users/users.service';  

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,  
  ) {}

 // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user;
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

  @Get('logout')
  async logout(@Response() res) {
    res.clearCookie('auth');
    res.send('Logged out successfully');
  }
}