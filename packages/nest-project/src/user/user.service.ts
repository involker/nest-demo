import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  add(user: User) {
    return this.userRepository.insert(user);
  }
  query(user: User) {
    return this.userRepository.find({
      select: ['account', 'password', 'id', 'nickName'],
      where: {
        account: user.account || null
      }
    });
  }
  update(user: User) {
    return this.userRepository.save(user);
  }
  del(user: User) {
    return this.userRepository.delete(user);
  }
  detail(id: number) {
    return this.userRepository.findOne({
      select: ['account', 'password', 'id', 'nickName'],
      where: {
        id,
      }
    })
  }
}
