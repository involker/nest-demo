import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
@Entity('article')
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  userId: string;

  @CreateDateColumn({
    comment: "创建时间"
  })
  createTime: Date;

  @CreateDateColumn({
    comment: "更新时间"
  })
  updateTime: Date;
}
