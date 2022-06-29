import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  account: string;
  @Column()
  password: string;
  @Column()
  nickName: string;
  @CreateDateColumn({
    comment: "创建时间"
  })
  createTime: Date;
  @CreateDateColumn({
    comment: "更新时间"
  })
  updateTime: Date;
}
