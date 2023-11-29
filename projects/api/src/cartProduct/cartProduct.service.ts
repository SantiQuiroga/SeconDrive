import { Injectable } from '@nestjs/common';

import PrismaService from '@/prisma/prisma.service';

import CreateCartProductDto from './dto/create-cartProduct.dto';


@Injectable()
export default class CartProductService {
  constructor(private prisma: PrismaService) {}

  create(createCartProductDto: CreateCartProductDto) {
    return this.prisma.cartProduct.create({ data: createCartProductDto });
  }

  findAllByCartId(cartId: number) {
    return this.prisma.cartProduct.findMany({ where: { cartId, quantity: { gt: 0 } } });
  }

  async findTotalPrice(cartId: number) {
    const cart = await this.prisma.cartProduct.findMany({
      where: { cartId }
    });
    let total : number = 0;
    cart.forEach(async (element) => {
      const prod = await this.prisma.product.findUnique({
        where: { id: element.productId }
      });
      total += (Number((prod.price - (prod.price * prod.discount)).toFixed(0)) * Number(element.quantity));

    });
    return total;
  }

  findAllByUserId(userId: number) {
    const cartid = this.prisma.cart.findUnique({
      where: { userId }
    });
    return this.findAllByCartId(Number(cartid));
  }

  update(id: number, quantity: number) {
    return this.prisma.cartProduct.update({
      where: { id },
      data: { quantity }
    });
  }

}
