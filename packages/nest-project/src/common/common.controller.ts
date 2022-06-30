import { Controller, Post, Body, HttpCode, Get } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express"
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join, resolve } from 'path';
@Controller('')
export class CommonController {
  @Post('upload')
  @HttpCode(200)
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @Body() body: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const uploadPath = "public"
    const writeImage = createWriteStream(join(__dirname, '../..', uploadPath, `${file.originalname}`))
    writeImage.write(file.buffer)
    const url = `http://localhost:3000/${uploadPath}/${file.originalname}`;
    return {
      url
    };
  }
}
