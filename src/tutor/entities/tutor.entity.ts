import {
  Entity,
  PrimaryColumn,
  Column,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import { Qualification } from './qualification.entity';

@Entity('tutors')
export class Tutor {
  @PrimaryColumn()
  id!: string;

  @Column({ default: true })
  isActive!: boolean;

  @Column({ type: 'varchar', nullable: true })
  fullName?: string;

  @Column({ type: 'bigint', unsigned: true })
  phone!: string;

  @Column()
  password!: string;

  @OneToMany(() => Qualification, (qualification) => qualification.tutor)
  qualifications?: Qualification[];

  @BeforeInsert()
  generateId() {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    this.id = `TUTOR-${randomNum}`;
  }
}
