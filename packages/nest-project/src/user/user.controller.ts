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
    const { current = 1, size = 10 } = request.body;
    const [records, total] = await this.userService.query(request.body, { size, current });
    res.send({
      rspDesc: '操作成功', data: {
        records,
        total,
        current,
        size
      }, rspCode: 'success'
    });
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
  @Post('detail')
  @HttpCode(200)
  async detail(@Req() request: Request, @Res() res: Response) {
    const result = await this.userService.detail(request.body.id);
    res.send({ rspDesc: '操作成功', data: result, rspCode: 'success' });
  }
}
