import { INestApplication, ValidationPipe } from '@nestjs/common';

export function configClassValidator(app: INestApplication) {
  app.useGlobalPipes(new ValidationPipe());
}
