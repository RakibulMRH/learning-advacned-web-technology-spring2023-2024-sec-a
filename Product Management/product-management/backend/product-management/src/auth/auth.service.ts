import { Injectable, Logger } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthLoginDto } from './dto/auth-login.dto';
@Injectable()

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    this.logger.log(`Validating user: ${username}`);
    const user = await this.usersService.findOne(username);
    if (user) {
      this.logger.log(`Found user: ${username}`);
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        this.logger.log(`Password match for user: ${username}`);
        const { password, ...result } = user;
        return result;
      } else {
        this.logger.warn(`Password mismatch for user: ${username}`);
      }
    } else {
      this.logger.warn(`User not found: ${username}`);
    }
    return null;
  }

  async login(user: AuthLoginDto) {
    this.logger.log(`Logging in user: ${user.email}`);
    const foundUser = await this.usersService.findByEmail(user.email);
    if (!foundUser) {
      this.logger.warn(`User not found: ${user.email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(user.password, foundUser.password);
    if (!passwordMatch) {
      this.logger.warn(`Password mismatch for user: ${user.email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.log(`User authenticated: ${user.email}`);
    const payload = { email: foundUser.email, role: foundUser.role, sub: foundUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}