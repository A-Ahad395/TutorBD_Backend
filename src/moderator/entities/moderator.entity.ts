import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';



@Entity('moderators')
export class Moderator {

  @PrimaryGeneratedColumn()
  id!: number;


  @Column({ length: 100 })
  fullName!: string;


  @Column({ unique: true })
  email!: string;


  @Column()
  password!: string;


  @Column({ unique: true, length: 15 })
  phone!: string;


  @Column({
    type: 'enum',
    enum: ['Male', 'Female', 'Other'],
    nullable: true,
  })
  gender!: string;


  @Column({ nullable: true })
  address!: string;


  @Column({ nullable: true })
  photo!: string;


  @Column({
    default: 'Moderator',
  })
  role!: string;


  @Column({
    default: true,
  })
  isActive!: boolean;


  @CreateDateColumn()
  createdAt!: Date;


  @UpdateDateColumn()
  updatedAt!: Date;


 
}