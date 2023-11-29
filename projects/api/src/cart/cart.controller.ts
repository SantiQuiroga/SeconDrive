import {
  Body,
  Controller,
  Get,
  Param,
  Post
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Cart } from "@prisma/client";

import CartService from "./cart.service";

@Controller('cart')
@ApiTags('Cart')
export default class CartController {

  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() cart: Cart): Promise<Cart> {
    const crt = await this.cartService.create(cart);
    return crt;
  }

  @Get(':id')
  findOne(@Param('id')id: number): Promise<Cart> {
    return this.cartService.findOne(id);
  }

  @Get('/user/:userid')
  findOneByUserId(@Param('userid')userId: number): Promise<Cart> {
    return this.cartService.findOneByUserId(userId);
  }
}
