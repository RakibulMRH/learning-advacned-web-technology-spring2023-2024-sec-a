import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { NotFoundException } from '@nestjs/common';
import { randomBytes } from 'crypto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.usersService.create({ email, password: hashedPassword });
    return user;
  }
  async forgotPassword(email: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
        throw new NotFoundException('User not found');
    }

    const resetToken = randomBytes(20).toString('hex');
    const resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour

    await this.usersService.updateResetPasswordToken(user.id, resetToken, resetPasswordExpires);

    // Send email with reset token and instructions
    // ...

    return { message: 'Reset password link has been sent to your email' };
  }

async resetPassword(token: string, newPassword: string) {
    const user = await this.usersService.findByResetPasswordToken(token);
    if (!user) {
        throw new NotFoundException('Invalid reset token');
    }

    if (user.resetPasswordExpires < new Date()) {
        throw new BadRequestException('Reset password token has expired');
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await this.usersService.resetPassword(user.id, hashedPassword);

    return { message: 'Password reset successful' };
}
  // Implement other authentication methods like reset password, etc.
}