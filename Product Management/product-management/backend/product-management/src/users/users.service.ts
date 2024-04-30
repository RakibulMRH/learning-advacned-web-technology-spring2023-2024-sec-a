import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }

  findById(id: number): Promise<User> {
    return this.usersRepository.findOne({ where: { id } });
  }

  findOne(email: string): Promise<User> {
    return this.usersRepository.findOne({ where: { email } });
  }
  async updateResetPasswordToken(userId: number, resetToken: string, resetPasswordExpires: Date) {
    await this.usersRepository.update(userId, { resetPasswordToken: resetToken, resetPasswordExpires });
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findById(id);
    Object.assign(user, updateUserDto);
    return this.usersRepository.save(user);
  }   
  findByResetPasswordToken(token: string): Promise<User> {
    return this.usersRepository.findOne({ where: { resetPasswordToken: token } });
  }

  async resetPasswordToken(id: number, token: string): Promise<User> {
    const user = await this.findById(id);
    user.resetPasswordToken = token;
    return this.usersRepository.save(user);
  }
}
   