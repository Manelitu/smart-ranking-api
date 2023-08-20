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
    .addSecurity('api-key', {
      type: 'apiKey',
      in: 'header',
      name: 'X-API-KEY',
    })
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, documentBuild);
  SwaggerModule.setup(config.url, app, document);
}
