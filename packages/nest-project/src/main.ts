import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from "./interceptor/transform.interceptor";
import { HttpExecptionFilter } from "./filter/http-execption.filter"
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new HttpExecptionFilter())
  await app.listen(3000);
}
bootstrap();
