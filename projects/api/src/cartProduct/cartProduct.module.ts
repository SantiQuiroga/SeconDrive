import { Module } from "@nestjs/common";

import PrismaService from "@/prisma/prisma.service";

import CartProductController from "./cartProduct.controller";
import CartProductService from "./cartProduct.service";

@Module({
  controllers: [CartProductController],
  providers: [CartProductService, PrismaService],
})

export default class CartProductModule {}
