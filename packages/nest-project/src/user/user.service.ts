import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import Page from "../interface/page";
import { CreateUserDto } from "./dto/create-user.dto"

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  add(user: CreateUserDto) {
    return this.userRepository.insert(user);
  }
  query(user: User, page: Page) {
    return this.userRepository.findAndCount({
      where: {
        account: user.account || null
      },
      skip: (page.size) * (page.current - 1),
      take: page.size
    });
  }
  update(user: User) {
    return this.userRepository.save({ ...user, updateTime: new Date() });
  }
  del(user: User) {
    return this.userRepository.delete(user);
  }
  detail(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      }
    })
  }
}
