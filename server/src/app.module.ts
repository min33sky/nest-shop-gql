import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { ProductModule } from './product/product.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (config: ConfigService) => {
        return {
          cors: {
            origin: config.get('CLIENT_URL'),
          },
          autoSchemaFile: join(
            process.cwd(),
            config.get<string>('SCHEMA_PATH'),
          ),
          sortSchema: true,
          playground: true,
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    ProductModule,
    PaymentModule,
  ],
})
export class AppModule {}
