import { DataSource } from 'typeorm';
import { Article } from './entities/article.entity';
export declare const articleProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Article>;
    inject: string[];
}[];
