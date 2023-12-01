
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartProduct } from '@prisma/client';

import CartProductService from './cartProduct.service';
import CreateCartProductDto from './dto/create-cartProduct.dto';

@Controller('cartProduct')
@ApiTags('CartProduct')
export default class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Post()
  async create(@Body() cartProduct: CreateCartProductDto): Promise<CartProduct> {
    const prd = await this.cartProductService.create(cartProduct);
    return prd;
  }

  @Get()
  findAll(): Promise<CartProduct[]> {
    return this.cartProductService.findAll();
  }

  @Get(':cartId')
  findAllByCartId(@Param('cartId') cartId: string): Promise<CartProduct[]> {
    return this.cartProductService.findAllByCartId(Number(cartId));
  }

  @Get('total/:cartId')
  findTotalPrice(@Param('cartId') cartId: string): Promise<number> {
    return this.cartProductService.findTotalPrice(Number(cartId));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() cartProduct: CartProduct): Promise<CartProduct> {
    return this.cartProductService.update(Number(id), cartProduct.quantity);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CartProduct> {
    return this.cartProductService.remove(Number(id));
  }
}
