import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { CartItem } from './cartItem.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CartItem, cartItem => cartItem.cart, { eager: true })
  items: CartItem[];

  @ManyToOne(() => User, user => user.cart)
  user: User;

  // Additional columns and relations as needed
}