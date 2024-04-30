import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthLoginDto } from './dto/auth-login.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    this.logger.log(`Validating user: ${email}`);
    const user = await this.usersService.findOne(email);
    if (user) {
      this.logger.log(`Found user: ${email}`);
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        this.logger.log(`Password match for user: ${email}`);
        const { password, ...result } = user;
        return result;
      } else {
        this.logger.warn(`Password mismatch for user: ${email}`);
      }
    } else {
      this.logger.warn(`User not found: ${email}`);
    }
    return null;
  }

  async login(user: AuthLoginDto) {
    if (!user) {
      throw new BadRequestException('User data is not provided');
    }
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
    const accessToken = this.jwtService.sign(payload);
    this.logger.log(`Access Token: ${accessToken}`);
    return {
      access_token: accessToken,
    };
  }
}