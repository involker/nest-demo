import { Controller, Post, Req, HttpCode, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { Request, Response } from 'express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('add')
  @HttpCode(200)
  async add(@Req() request: Request, @Res() res: Response) {
    await this.userService.add(request.body);
    res.send({ rspDesc: '操作成功', data: null, rspCode: 'success' });
  }
  @Post('query')
  @HttpCode(200)
  async query(@Req() request: Request, @Res() res: Response) {
    const result = await this.userService.query();
    res.send({ rspDesc: '操作成功', data: result, rspCode: 'success' });
  }
  @Post('update')
  @HttpCode(200)
  async update(@Req() request: Request, @Res() res: Response) {
    await this.userService.update(request.body);
    res.send({ rspDesc: '操作成功', data: null, rspCode: 'success' });
  }
  @Post('del')
  @HttpCode(200)
  async del(@Req() request: Request, @Res() res: Response) {
    await this.userService.del(request.body);
    res.send({ rspDesc: '操作成功', data: null, rspCode: 'success' });
  }
}
