import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { promises as fs } from 'fs';
import { decode } from 'iconv-lite';
import path from 'path';

@Injectable()
export class UploadService {
  #uploadDir = 'uploads';

  constructor() {
    this.ensureUploadDirectoryExists();
  }

  private async ensureUploadDirectoryExists() {
    try {
      await fs.access(this.#uploadDir);
    } catch {
      await fs.mkdir(this.#uploadDir);
    }
  }

  async saveFiles(files: Express.Multer.File[]) {
    const savedFileName = files.map(async (file) => {
      const originalName = decode(Buffer.from(file.originalname, 'binary'), 'utf-8');
      const fileName = `${dayjs().unix()}_${originalName.replaceAll(' ', '_')}`;
      const filePath = path.join(this.#uploadDir, fileName);
      await fs.writeFile(filePath, file.buffer);
      return fileName;
    });

    return { savedFileName };
  }

  async findFile(fileName: string) {
    const filePath = path.join(this.#uploadDir, fileName);

    return fs.readFile(filePath);
  }
}
