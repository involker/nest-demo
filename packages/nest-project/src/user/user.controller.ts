import { Controller, Post, Req, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('add')
  @HttpCode(200)
  async add(@Req() request: Request) {
    await this.userService.add(request.body);
    return null
  }
  @Post('query')
  @HttpCode(200)
  async query(@Req() request: Request) {
    const { current = 1, size = 10 } = request.body;
    const [records, total] = await this.userService.query(request.body, { size, current });
    return {
      records,
      total,
      current,
      size
    }
  }
  @Post('update')
  @HttpCode(200)
  async update(@Req() request: Request) {
    await this.userService.update(request.body);
    return null;
  }
  @Post('del')
  @HttpCode(200)
  async del(@Req() request: Request) {
    await this.userService.del(request.body);
    return null
  }
  @Post('detail')
  @HttpCode(200)
  async detail(@Req() request: Request) {
    const result = await this.userService.detail(request.body.id);
    return result;
  }
}
