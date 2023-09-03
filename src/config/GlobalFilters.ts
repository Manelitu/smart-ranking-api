import { INestApplication } from '@nestjs/common';

export const configGlobalFilters = (
  app: INestApplication,
  filter: any,
): void => {
  app.useGlobalFilters(filter);
};
