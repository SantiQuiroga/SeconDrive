import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Cart } from "@prisma/client";

import CartService from "./cart.service";
import CreateCartDto from "./dto/create-cart.dto";

@Controller('cart')
@ApiTags('Cart')
export default class CartController {

  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() cart: CreateCartDto): Promise<Cart> {
    const crt = await this.cartService.create(cart);
    return crt;
  }

  @Get(':id')
  findOne(@Param('id')id: string): Promise<Cart> {
    return this.cartService.findOne(Number(id));
  }

  @Get('/user/:userid')
  findOneByUserId(@Param('userid')userId: string): Promise<Cart> {
    return this.cartService.findOneByUserId(Number(userId));
  }

  @Delete(':id')
  delete(@Param('id')id: string): Promise<Cart> {
    return this.cartService.delete(Number(id));
  }
}
