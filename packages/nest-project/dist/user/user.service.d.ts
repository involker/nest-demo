import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    add(user: User): Promise<import("typeorm").InsertResult>;
    query(user: User): Promise<User[]>;
    update(user: User): Promise<User>;
    del(user: User): Promise<import("typeorm").DeleteResult>;
    detail(id: number): Promise<User>;
}
