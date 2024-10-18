declare namespace NodeJS {
  interface ProcessEnv {
    SERVER_URL: string;
    NODE_ENV: 'development' | 'production';
    PORT: number;
  }
}
