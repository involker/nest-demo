import { UserService } from './user.service';
import { Request, Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    add(request: Request, res: Response): Promise<void>;
    query(request: Request, res: Response): Promise<void>;
    update(request: Request, res: Response): Promise<void>;
    del(request: Request, res: Response): Promise<void>;
    detail(request: Request, res: Response): Promise<void>;
}
