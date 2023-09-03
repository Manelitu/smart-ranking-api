import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

interface ConfigSwaggerParams {
  app: INestApplication;
  config: {
    url: string;
  };
}

export function configSwagger({ app, config }: ConfigSwaggerParams) {
  const documentBuild = new DocumentBuilder()
    .setTitle('SMART RANKING API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, documentBuild);
  SwaggerModule.setup(config.url, app, document);
}
