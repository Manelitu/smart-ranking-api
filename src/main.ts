import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configCors, configSwagger, configClassValidator } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  configCors(app);
  configClassValidator(app);
  configSwagger({
    app: app,
    config: {
      url: '/docs',
    },
  });

  await app.listen(8080);
}
bootstrap();
