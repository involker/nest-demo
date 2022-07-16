import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExecptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const data: any = exception.getResponse() || {};
    console.log(data);
    response.status(status).json({
      rspDesc: data.message,
      rspCode: "fail",
      data: data.data
    });
  }
}
