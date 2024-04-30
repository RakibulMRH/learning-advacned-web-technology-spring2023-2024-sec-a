import { Controller, Request, Post, UseGuards, Body, Get, Res, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
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
    // Implement registration logic here
  }

  @Get('logout')
  async logout(@Response() res) {
    res.clearCookie('auth');
    res.send('Logged out successfully');
  }
}