import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import Page from "../interface/page";
import { CreateUserDto } from "./dto/create-user.dto"
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  add(user: CreateUserDto) {
    const entity = Object.assign(new User(), user);
    return this.userRepository.insert(entity);
  }
  query(user: User, page: Page) {
    return this.userRepository.findAndCount({
      where: {
        account: user.account || null,
        nickName: user.nickName || null
      },
      skip: (page.size) * (page.current - 1),
      take: page.size,
      order: {
        updateTime: "desc"
      }
    });
  }
  update(user: UpdateUserDto) {
    const entity = Object.assign(new User(), {
      ...user, updateTime: new Date()
    });
    return this.userRepository.save(entity);
  }
  del(user: UpdateUserDto) {
    return this.userRepository.delete(user);
  }
  detail(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      }
    })
  }
  login(user: User) {
    return this.userRepository.findOne({
      where: {
        account: user.account,
        password: user.password
      }
    })
  }
  async findOne(account: string) {
    return this.userRepository.findOne({
      where: {
        account
      }
    });
  }
  async findById(id: number) {
    return this.userRepository.findOne({
      where: {
        id
      }
    });
  }
}
