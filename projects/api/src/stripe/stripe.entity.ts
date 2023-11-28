import { ApiProperty } from '@nestjs/swagger';
import { CartProduct } from '@prisma/client';

export default class StripeEntity {
  [x: string]: any;

  @ApiProperty()
  id: number;

  @ApiProperty()
  cart: CartProduct[];
}
