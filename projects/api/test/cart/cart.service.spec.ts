
import { Test } from '@nestjs/testing';
import { Cart } from '@prisma/client';

import CartService from '@/cart/cart.service';
import CreateCartDto from '@/cart/dto/create-cart.dto';
import PrismaService from '@/prisma/prisma.service';

describe('CartService', () => {
  let cartService: CartService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CartService,
        {
          provide: PrismaService,
          useValue: {
            cart: {
              create: jest.fn(),
              findUnique: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    cartService = moduleRef.get<CartService>(CartService);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
  });

  describe('create', () => {
    it('should create a new cart', async () => {
      const createCartDto: CreateCartDto = {
        userId: 1,
      };
      const createdCart: Cart = {
        id: 1,
        userId: 1,
      };

      jest.spyOn(prismaService.cart, 'create').mockResolvedValue(createdCart);

      const result = await cartService.create(createCartDto);

      expect(prismaService.cart.create).toHaveBeenCalledWith({
        data: createCartDto,
      });
      expect(result).toEqual(createdCart);
    });
  });

  describe('findOne', () => {
    it('should find a cart by id', async () => {
      const id = 1;
      const foundCart: Cart = {
        id: 1,
        userId: 1,
      };

      jest.spyOn(prismaService.cart, 'findUnique').mockResolvedValue(foundCart);

      const result = await cartService.findOne(id);

      expect(prismaService.cart.findUnique).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual(foundCart);
    });
  });

  describe('findOneByUserId', () => {
    it('should find a cart by userId', async () => {
      const userId = 1;
      const foundCart: Cart = {
        id: 1,
        userId: 1,
      };

      jest.spyOn(prismaService.cart, 'findUnique').mockResolvedValue(foundCart);

      const result = await cartService.findOneByUserId(userId);

      expect(prismaService.cart.findUnique).toHaveBeenCalledWith({
        where: { userId },
      });
      expect(result).toEqual(foundCart);
    });
  });

  describe('delete', () => {
    it('should delete a cart by id', async () => {
      const id = 1;
      const deletedCart: Cart = {
        id: 1,
        userId: 1,
      };

      jest.spyOn(prismaService.cart, 'delete').mockResolvedValue(deletedCart);

      const result = await cartService.delete(id);

      expect(prismaService.cart.delete).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual(deletedCart);
    });
  });
});
