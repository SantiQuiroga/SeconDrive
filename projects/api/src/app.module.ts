import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import CategoryModule from './category/category.module';
import ProductModule from './product/product.module';
import StripeModule from './stripe/stripe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../client/dist'),
    }),
    CategoryModule,
    ProductModule,
    StripeModule,
  ],
})
export default class AppModule {}
