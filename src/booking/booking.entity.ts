import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Booking {

  @PrimaryGeneratedColumn()
  id!: number;


  @Column({
    type: 'int',
  })
  studentId!: number;


  @Column({
    type: 'int',
  })
  tutorId!: number;


  @Column({
    type: 'varchar',
    length: 255,
  })
  message!: string;


  @Column({
    type: 'varchar',
    length: 20,
    default: 'Pending',
  })
  status!: string;


  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

}