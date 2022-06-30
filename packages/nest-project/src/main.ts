import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from "./interceptor/transform.interceptor";
import { HttpExecptionFilter } from "./filter/http-execption.filter";
import * as serveStatic from "serve-static";
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.use('/public', serveStatic(join(__dirname,'../public'), {
    maxAge: '1d',
    extensions: ['jpg', 'jpeg', 'png', 'gif'],
  }));
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new HttpExecptionFilter())
  await app.listen(3000);
}
bootstrap();
