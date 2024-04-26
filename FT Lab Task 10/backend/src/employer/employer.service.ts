import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployerEntity } from '../entities/employer.entity';
import { EmployerDto } from './dtos/employer.dto';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(EmployerEntity)
    private employerRepository: Repository<EmployerEntity>,
  ) {}

  async createEmployer(employerDto: EmployerDto): Promise<EmployerEntity> {
    const employer = this.employerRepository.create(employerDto);
    return this.employerRepository.save(employer);
  }

  async updateEmployer(id: number, employerDto: EmployerDto): Promise<EmployerEntity> {
    await this.employerRepository.update(id, employerDto);
    const updatedEmployer = await this.employerRepository.findOne({ where: { id } });
    if (!updatedEmployer) {
      throw new NotFoundException(`Employer with ID ${id} not found`);
    }
    return updatedEmployer;
  }

  async deleteEmployer(id: number): Promise<void> {
    const result = await this.employerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Employer with ID ${id} not found`);
    }
  }

  async findEmployer(id: number): Promise<EmployerEntity> {
    const employer = await this.employerRepository.findOne({ where: { id } });
    if (!employer) {
      throw new NotFoundException(`Employer with ID ${id} not found`);
    }
    return employer;
  }
}