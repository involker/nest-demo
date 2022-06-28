import { Connection, Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare const photoProviders: {
    provide: string;
    useFactory: (connection: Connection) => Repository<User>;
    inject: string[];
}[];
