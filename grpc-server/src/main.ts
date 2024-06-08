import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

export const grpcClientOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'auth', // name of the package defined in the proto file
    protoPath: join(__dirname, './proto/auth.proto'), // path to the proto file
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcClientOptions,
  );
  await app.listen();
}

bootstrap();
