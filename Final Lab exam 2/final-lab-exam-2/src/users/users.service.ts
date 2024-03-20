import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  [x: string]: any;
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  create(user: Partial<User>): Promise<User> {
    const newUser = this.usersRepository.create(user);
    return this.usersRepository.save(newUser);
  }

  // Implement other methods like update, delete, etc.
  async updateResetPasswordToken(userId: number, resetToken: string, resetPasswordExpires: Date) {
    await this.usersRepository.update(userId, { resetPasswordToken: resetToken, resetPasswordExpires });
  }

  async findByResetPasswordToken(token: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { resetPasswordToken: token } });
  }

  async resetPassword(userId: number, newPassword: string) {
    await this.usersRepository.update(userId, { password: newPassword, resetPasswordToken: null, resetPasswordExpires: null });
  }
}