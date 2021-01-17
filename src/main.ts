import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExeptionFilter } from './common/filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExeptionFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
