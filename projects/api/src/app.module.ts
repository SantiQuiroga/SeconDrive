import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import CartModule from './cart/cart.module';
import CartProductModule from './cartProduct/cartProduct.module';
import CategoryModule from './category/category.module';
import ProductModule from './product/product.module';
import StripeModule from './stripe/stripe.module';
import UserModule from './user/user.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../client/dist'),
    }),
    CategoryModule,
    ProductModule,
    CartModule,
    CartProductModule,
    UserModule,
    StripeModule
  ],
})
export default class AppModule { }
