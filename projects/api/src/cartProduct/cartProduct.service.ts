import { Injectable } from '@nestjs/common';

import PrismaService from '@/prisma/prisma.service';

import CreateCartProductDto from './dto/create-cartProduct.dto';


@Injectable()
export default class CartProductService {
  constructor(private prisma: PrismaService) {}

  async create(createCartProductDto: CreateCartProductDto) {
    return this.prisma.cartProduct.create({ data: createCartProductDto });
  }

  async findAllByCartId(cartId: number) {
    return this.prisma.cartProduct.findMany({ where: { cartId, quantity: { gt: 0 } } });
  }

  async findAllByUserId(userId: number) {
    const cartid = this.prisma.cart.findUnique({
      where: { userId }
    });
    return this.findAllByCartId(Number(cartid));
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


  async update(id: number, quantity: number) {
    if (quantity === 0) {
      return this.remove(id);
    }
    return this.prisma.cartProduct.update({
      where: { id },
      data: { quantity }
    });
  }

  async remove(id: number) {
    return this.prisma.cartProduct.delete({
      where: { id }
    });
  }

}
