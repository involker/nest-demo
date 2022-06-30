import { UserService } from './user.service';
import { Request } from 'express';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    add(createUserDto: CreateUserDto): Promise<any>;
    query(request: Request): Promise<{
        records: any;
        total: any;
        current: any;
        size: any;
    }>;
    update(updateUserDto: UpdateUserDto): Promise<any>;
    del(request: Request): Promise<any>;
    detail(request: Request): Promise<any>;
}
