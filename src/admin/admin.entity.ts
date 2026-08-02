import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Admin {
  @PrimaryColumn()
  id!: number;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
  })
  username!: string;

  @Column({
    type: 'varchar',
    length: 150,
  })
  fullName!: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isActive!: boolean;

  @BeforeInsert()
  generateId() {
    this.id = Math.floor(Math.random() * 10000);
  }
}