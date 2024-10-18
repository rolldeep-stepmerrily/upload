import { Test, TestingModule } from '@nestjs/testing';
import { UploadController } from '../upload.controller';
import { UploadService } from '../upload.service';

describe('UploadController', () => {
  let controller: UploadController;
  let service: UploadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UploadController],
      providers: [{ provide: UploadService, useValue: { saveFiles: jest.fn(), findFile: jest.fn() } }],
    }).compile();

    controller = module.get<UploadController>(UploadController);
    service = module.get<UploadService>(UploadService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
