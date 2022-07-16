import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({
    unique: true
  })
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

  @Column()
  avatr: string;

  @BeforeInsert()
  @BeforeUpdate()
  async encryptPwd(){
    this.password = await bcrypt.hash(this.password,10); 
  }
}
