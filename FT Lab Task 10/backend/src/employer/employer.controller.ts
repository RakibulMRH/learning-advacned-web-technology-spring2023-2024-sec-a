import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  
  import { EmployerEntity } from '../entities/employer.entity';
  import { EmployerService } from './employer.service';
  import { EmployerDto } from './dtos/employer.dto';
  
  @Controller('employers')
  export class EmployerController {
    constructor(private employerService: EmployerService) {}
  
    @Post()
    @UsePipes(ValidationPipe)
    async createEmployer(@Body() employerDto: EmployerDto): Promise<EmployerEntity> {
      return this.employerService.createEmployer(employerDto);
    }
  
    @Put(':id')
    @UsePipes(ValidationPipe)
    async updateEmployer(
      @Param('id') id: number,
      @Body() employerDto: EmployerDto,
    ): Promise<EmployerEntity> {
      return this.employerService.updateEmployer(id, employerDto);
    }
  
    @Delete(':id')
    async deleteEmployer(@Param('id') id: number): Promise<void> {
      return this.employerService.deleteEmployer(id);
    }
  
    @Get(':id')
    async findEmployer(@Param('id') id: number): Promise<EmployerEntity> {
      return this.employerService.findEmployer(id);
    }
  }