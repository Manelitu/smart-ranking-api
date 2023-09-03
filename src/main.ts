import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  configCors,
  configSwagger,
  configClassValidator,
  configGlobalFilters,
} from './config';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configCors(app);
  configClassValidator(app);
  configGlobalFilters(app, new AllExceptionsFilter());
  configSwagger({
    app: app,
    config: {
      url: '/docs',
    },
  });

  await app.listen(8080);
}
bootstrap();
