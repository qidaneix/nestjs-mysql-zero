import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  salary: number;

  @Column({ default: false })
  isLeaved: boolean;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];
}
