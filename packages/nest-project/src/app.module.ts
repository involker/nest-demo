import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommonController } from "./common/common.controller";
import { AuthModule } from './auth/auth.module';
import { ArticleModule } from './article/article.module';
@Module({
  imports: [AuthModule, UserModule, ArticleModule],
  controllers: [AppController, CommonController],
  providers: [AppService],

})
export class AppModule { }
