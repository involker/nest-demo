import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticleService {
    private articleRepository;
    constructor(articleRepository: Repository<Article>);
    add(createArticleDto: CreateArticleDto, user: any): Promise<import("typeorm").InsertResult>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateArticleDto: UpdateArticleDto): string;
    remove(id: number): string;
}
