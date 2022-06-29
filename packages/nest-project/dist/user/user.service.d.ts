import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import Page from "../interface/page";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    add(user: CreateUserDto): Promise<import("typeorm").InsertResult>;
    query(user: User, page: Page): Promise<[User[], number]>;
    update(user: User): Promise<{
        updateTime: Date;
        id: number;
        account: string;
        password: string;
        nickName: string;
        createTime: Date;
    } & User>;
    del(user: User): Promise<import("typeorm").DeleteResult>;
    detail(id: number): Promise<User>;
}
