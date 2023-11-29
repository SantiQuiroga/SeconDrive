import { Injectable } from '@nestjs/common';
import { Cart } from '@prisma/client';

import PrismaService from '@/prisma/prisma.service';

import CreateCartDto from './dto/create-cart.dto';


@Injectable()
export default class CartService {
  constructor(private prisma: PrismaService) {}

  create(createCartDto: CreateCartDto) {
    return this.prisma.cart.create({
      data: createCartDto,
    });
  }

   findOne(id: number): Promise<Cart> {
    const cart = this.prisma.cart.findUnique({
        where: { id },
      });
      return cart;
    }

    findOneByUserId(userId: number): Promise<Cart> {
      const cart = this.prisma.cart.findUnique({
          where: { userId },
        });
        return cart;
      }

    delete(id: number): Promise<Cart> {
      const cart = this.prisma.cart.delete({
          where: { id },
        });
        return cart;
      }
}
