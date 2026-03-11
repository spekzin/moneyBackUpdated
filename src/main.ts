import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Angular frontend (configurable for deploy)
  // Use CORS_ORIGIN as a comma-separated list, e.g.:
  // CORS_ORIGIN="https://my-app.vercel.app,http://localhost:4200"
  const corsOrigins = (process.env.CORS_ORIGIN ?? 'http://localhost:4200,http://localhost:4000')
    .split(',')
    .map((o) => o.trim())
    .filter(Boolean);

  app.enableCors({
    origin: corsOrigins,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // API prefix
  app.setGlobalPrefix('api');

  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST ?? '0.0.0.0';

  await app.listen(port, host);
  console.log(`🚀 API running on http://${host}:${port}/api`);
}
bootstrap();
