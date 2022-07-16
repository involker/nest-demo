import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(account: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
    }>;
    getUserInfo(user: any): Promise<import("../user/entities/user.entity").User>;
}
