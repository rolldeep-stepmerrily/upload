import { ApiProperty } from '@nestjs/swagger';

export class UploadFilesSwaggerDto {
  @ApiProperty({
    type: 'array',
    items: { type: 'string', format: 'binary' },
    description: 'Files to upload',
  })
  files: any[];
}
