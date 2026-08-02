import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tuition {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  title!: string;


  @Column({
    type: 'varchar',
    length: 100,
  })
  subject!: string;


  @Column({
    type: 'varchar',
    length: 100,
  })
  className!: string;


  @Column({
    type: 'varchar',
    length: 100,
  })
  location!: string;


  @Column({
    type: 'varchar',
    length: 20,
  })
  salary!: string;


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