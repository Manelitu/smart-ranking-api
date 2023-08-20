import { INestApplication } from '@nestjs/common';

export function configCors(app: INestApplication) {
  app.enableCors();
}
