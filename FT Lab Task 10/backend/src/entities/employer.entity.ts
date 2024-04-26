import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsString } from 'class-validator';

@Entity("Employer")
export class EmployerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  companyName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  contactNo: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  userName: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  password: string;
}