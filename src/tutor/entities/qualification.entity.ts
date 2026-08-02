import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tutor } from './tutor.entity';

@Entity('qualifications')
export class Qualification {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  degreeName?: string;

  @Column()
  institution?: string;

  @ManyToOne(() => Tutor, (tutor) => tutor.qualifications, {
    onDelete: 'CASCADE',
  })
  tutor?: Tutor;
}
