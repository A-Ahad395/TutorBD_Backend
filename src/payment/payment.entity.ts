import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'integer',
  })
  studentId!: number;

  @Column({
    type: 'integer',
  })
  tutorId!: number;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
  })
  amount!: number;

  @Column({
    type: 'varchar',
    length: 50,
  })
  paymentMethod!: string;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  transactionId!: string;

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