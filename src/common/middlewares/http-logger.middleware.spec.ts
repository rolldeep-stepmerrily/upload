import { HttpLoggerMiddleware } from './http-logger.middleware';

describe('HttpLoggerMiddleware', () => {
  let middleware: HttpLoggerMiddleware;
  let mockRequest: any;
  let mockResponse: any;
  let mockNect: jest.Mock;
  let mockLogger: jest.SpyInstance;
});
