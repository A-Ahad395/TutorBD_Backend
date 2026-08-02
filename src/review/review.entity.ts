import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Review {

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
    type: 'int',
  })
  rating!: number;


  @Column({
    type: 'varchar',
    length: 255,
  })
  comment!: string;


  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt!: Date;

}