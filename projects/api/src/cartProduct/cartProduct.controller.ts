
import {
  Body,
  Controller,
  Get,
  Param,
  Post
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import CartProductService from './cartProduct.service';

@Controller('cartProduct')
@ApiTags('CartProduct')
export default class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Post()
  async create(@Body() cartProduct: any): Promise<any> {
    const prd = await this.cartProductService.create(cartProduct);
    return prd;
  }

  @Get(':cartId')
  findAllByCartId(@Param('cartId') cartId: string): Promise<any> {
    return this.cartProductService.findAllByCartId(Number(cartId));
  }

  @Get('total/:cartId')
  findTotalPrice(@Param('cartId') cartId: string): Promise<any> {
    return this.cartProductService.findTotalPrice(Number(cartId));
  }

}
