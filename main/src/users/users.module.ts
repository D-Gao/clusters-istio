import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { protobufPackage } from 'src/types/auth';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: 'AUTH_SERVICE',
        /* transport: Transport.GRPC,
        options: {
          url: 'grpc-container:50051',
          package: protobufPackage,
          protoPath: join(__dirname, '../proto/auth.proto'),
        }, */
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          transport: Transport.GRPC,
          options: {
            url: configService.get<string>('GRPC_SERVER_URL'),
            package: protobufPackage,
            protoPath: join(__dirname, '../proto/auth.proto'),
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
