import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
/* import {
  ClientOptions,
  MicroserviceOptions,
  Transport,
} from '@nestjs/microservices';
import { join } from 'path';
import { ReflectionService } from '@grpc/reflection'; */

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* app.connectMicroservice<MicroserviceOptions>(grpcClientOptions); */
  await app.listen(3000);
}
bootstrap();

/* export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'hero', // ['hero', 'hero2']
    protoPath: join(__dirname, './hero/hero.proto'), // ['./hero/hero.proto', './hero/hero2.proto']
    onLoadPackageDefinition: (pkg, server) => {
      new ReflectionService(pkg).addToServer(server);
    },
  },
}; */
