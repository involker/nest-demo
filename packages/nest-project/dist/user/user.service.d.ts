import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import Page from "../interface/page";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    add(user: User): Promise<import("typeorm").InsertResult>;
    query(user: User, page: Page): Promise<[User[], number]>;
    update(user: User): Promise<User>;
    del(user: User): Promise<import("typeorm").DeleteResult>;
    detail(id: number): Promise<User>;
}
