import { Controller, Get, Post, UseGuards, Req, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from "./auth/local-auth.guard"
import { AuthService } from './auth/auth.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @HttpCode(200)
  async login(@Req() request: Request) {
    return this.authService.login(request.user);
  }

  @UseGuards(JwtAuthGuard)
  @Post('getCurrentUser')
  @HttpCode(200)
  getCurrentUser(@Req() request: Request) {
    return this.authService.getUserInfo(request.user);
  }
}
