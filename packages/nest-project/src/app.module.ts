import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CommonController } from "./common/common.controller";
@Module({
  imports: [UserModule],
  controllers: [AppController, CommonController],
  providers: [AppService],

})
export class AppModule { }
