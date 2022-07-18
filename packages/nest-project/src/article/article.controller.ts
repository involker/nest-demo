import { Controller, Get, Post, Body, Patch, Param, Req, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) { }

  @UseGuards(JwtAuthGuard)
  @Post("add")
  async create(@Req() request: Request) {
    const res = await this.articleService.add(request.body, request.user);
    return null;
  }
}
