import { UserService } from './user.service';
import { Request } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    add(request: Request): Promise<any>;
    query(request: Request): Promise<{
        records: import("./entities/user.entity").User[];
        total: number;
        current: any;
        size: any;
    }>;
    update(request: Request): Promise<any>;
    del(request: Request): Promise<any>;
    detail(request: Request): Promise<import("./entities/user.entity").User>;
}
