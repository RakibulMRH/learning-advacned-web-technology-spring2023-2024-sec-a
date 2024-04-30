import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthLoginDto } from './dto/auth-login.dto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

    async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === password) {      const { password, ...result } = user;
    return result;
    }
    return null;
    }

    async login(user: AuthLoginDto) {
  const foundUser = await this.userService.findByEmail(user.email);
  if (!foundUser) {
    throw new UnauthorizedException('Invalid credentials');
  }

  const passwordMatch = await bcrypt.compare(user.password, foundUser.password);
  if (!passwordMatch) {
    throw new UnauthorizedException('Invalid credentials');
  }

  const payload = { email: foundUser.email, role: foundUser.role, sub: foundUser.id };
  return {
    access_token: this.jwtService.sign(payload),
  };
}

}