import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { default as basicAuth } from 'express-basic-auth';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module.ts';

async function bootstrap() {

  const port = 80;
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('NestJS Swagger Protected UI Example')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  // use logger
  app.useLogger(app.get(Logger));
  // Basic Auth Middleware for Swagger
  app.use(
    '/api-docs',
    basicAuth({
      users: { admin: '123456' },
      challenge: true,
    }),
  );
  SwaggerModule.setup('api-docs', app, document);

  // app.setGlobalPrefix('/api');
  await app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
bootstrap();
