import { Controller, Get, Param, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';

import { UploadService } from './upload.service';
import { UploadFilesSwaggerDto } from './upload.dto';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @ApiOperation({ summary: '파일 업로드' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: UploadFilesSwaggerDto })
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return await this.uploadService.saveFiles(files);
  }

  @ApiOperation({ summary: '파일 조회' })
  @Get('/:fileName')
  async findFile(@Param('fileName') fileName: string) {}
}
