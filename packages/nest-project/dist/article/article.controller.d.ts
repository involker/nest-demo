import { ArticleService } from './article.service';
import { Request } from 'express';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(request: Request): Promise<any>;
}
