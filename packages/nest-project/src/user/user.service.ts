import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  async add(user: User) {
    return this.userRepository.insert(user);
  }
  async query() {
    return this.userRepository.find({
      select: ['account', 'password', 'id'],
    });
  }
  async update(user: User) {
    return this.userRepository.save(user);
  }
  del(user: User) {
    return this.userRepository.delete(user);
  }
}
