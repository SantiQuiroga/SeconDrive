import { ApiProperty } from '@nestjs/swagger';
import { CartProduct } from '@prisma/client';

import Cart from '../../cart/entities/cart.entity';
import Product from '../../product/entities/product.entity';

export default class CartProductEntity implements CartProduct {
  @ApiProperty()
  id: number;

  @ApiProperty()
  cartId: number;

  @ApiProperty()
  productId: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty({ type: () => Cart })
  cart: Cart;

  @ApiProperty({ type: () => Product })
  product: Product;
}
