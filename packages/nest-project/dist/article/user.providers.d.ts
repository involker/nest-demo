import { DataSource } from 'typeorm';
export declare const userProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<unknown>;
    inject: string[];
}[];
