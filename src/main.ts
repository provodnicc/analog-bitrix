import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.API_PORT || 3000
  const logger = new Logger('NestApplication')

  const app = await NestFactory.create(AppModule)
  app.enableCors()
  
  await app.listen(PORT, ()=>logger.verbose('server start on port: '+PORT));
}
bootstrap();
