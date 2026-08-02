import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  name!: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  description!: string;

  @Column({
  type: 'varchar',
  length: 20,
  default: 'Active',
})
status!: string;
}