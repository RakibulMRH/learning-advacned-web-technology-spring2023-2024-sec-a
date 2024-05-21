import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AuthLoginDto } from './dto/auth-login.dto';
import { v4 as uuidv4 } from 'uuid';
import { NotFoundException } from '@nestjs/common';
import { sendResetPasswordEmail } from '../auth/utils/email.util';
import { generateResetToken } from '../auth/utils/email.util';

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
      //this.logger.log(`Found user: ${email}`);
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        //his.logger.log(`Password match for user: ${email}`);
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
    //this.logger.log(`Logging in user: ${user.email}`);
    const foundUser = await this.usersService.findByEmail(user.email);
    if (!foundUser) {
     // this.logger.warn(`User not found: ${user.email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    const passwordMatch = await bcrypt.compare(user.password, foundUser.password);
    if (!passwordMatch) {
      //this.logger.warn(`Password mismatch for user: ${user.email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

   // this.logger.log(`User authenticated: ${user.email}`);
    const payload = { email: foundUser.email, role: foundUser.role, sub: foundUser.id };
    const accessToken = this.jwtService.sign(payload);
    this.logger.log(`Access Token: ${accessToken}`);
    return {
      access_token: accessToken,
      user: {
        id: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
      },
    };
  }
  async generateResetPasswordToken(email: string): Promise<string> {
  const user = await this.usersService.findByEmail(email);
  if (!user) {
    throw new NotFoundException('User not found');
  }

  // Generate a reset password token
  const resetPasswordToken = uuidv4();

  // Save the reset password token in the user's record
  user.resetPasswordToken = resetPasswordToken;
  await this.usersService.update(user.id, user);

  // Send the reset password token to the user's email
  // ...

  return resetPasswordToken;
}

  async resetPassword(token: string, newPassword: string): Promise<void> {
  const user = await this.usersService.findByResetPasswordToken(token);
  if (!user) {
    throw new UnauthorizedException('Invalid token');
  }

  // Hash the new password
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  // Update the user's password and clear the reset password token
  user.password = hashedPassword;
  user.resetPasswordToken = null;
  await this.usersService.update(user.id, user);
  }

  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);

    try 
    {
      const resetToken = generateResetToken();
      await sendResetPasswordEmail(email, resetToken);
      await this.usersService.updateResetPasswordToken(user.id, resetToken, new Date(Date.now() + 36000));
      return { message: 'Reset password link has been sent to your email' };
    } 
    catch (error) 
    {
      return { message: 'Failed to send reset password email', error };
    }
  }
}