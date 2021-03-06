import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { DatabaseModule } from '../database/database.module';
import { articleProviders } from './article.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ArticleController],
  providers: [ArticleService, ...articleProviders],
  exports: [ArticleService]
})
export class ArticleModule { }
