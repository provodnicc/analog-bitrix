import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'shop',
      password: 'shop123',
      database: 'shop_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConfigModule.forRoot({
      envFilePath: [
        '.production.env',
        '.development.env'
      ]
    }), 
    MulterModule.register({
      dest: './upload',
    }), ProductModule
  ],
})
export class AppModule {}
