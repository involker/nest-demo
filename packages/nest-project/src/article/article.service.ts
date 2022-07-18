import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Article } from './entities/article.entity';

import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(@Inject('ARTICLE_REPOSITORY')
  private articleRepository: Repository<Article>,) {

  }
  add(createArticleDto: CreateArticleDto, user: any) {
    const entity = Object.assign(new Article(), {
      ...createArticleDto,
      userId: user.id,
    });
    return this.articleRepository.insert(entity);
  }

  findAll() {
    return `This action returns all article`;
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    return `This action updates a #${id} article`;
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }
}
