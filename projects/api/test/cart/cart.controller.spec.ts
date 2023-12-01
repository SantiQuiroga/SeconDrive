import { Test, TestingModule } from '@nestjs/testing';
import { Cart } from '@prisma/client';

import CartController from '../../src/cart/cart.controller';
import CartService from '../../src/cart/cart.service';

describe('CartController', () => {
    let controller: CartController;
    let service: CartService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        controllers: [CartController],
        providers: [
          {
            provide: CartService,
            useValue: {
              create: jest.fn(),
              findOne: jest.fn(),
              findOneByUserId: jest.fn(),
              delete: jest.fn(),
            },
          },
        ],
      }).compile();

      controller = module.get<CartController>(CartController);
      service = module.get<CartService>(CartService);
    });


  describe('create', () => {
    it('should create a new cart', async () => {
      const cart: Cart = {
        id: 1,
        userId: 1,
       };
      const expectedResult: Cart = {
        id: 1, ...cart
       };

      jest.spyOn(service, 'create').mockResolvedValue(expectedResult);

      const result = await controller.create(cart);

      expect(result).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(cart);
    });
  });

  describe('findOne', () => {
    it('should find a cart by id', async () => {
      const id: number = 1;
      const expectedResult: Cart = {
        id: 1,
        userId: 1,
       };

      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult);

      const result = await controller.findOne(String(id));

      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('findOneByUserId', () => {
    it('should find a cart by user id', async () => {
      const userId: number = 1;
      const expectedResult: Cart = {
        id: 1,
        userId: 1,
       };

      jest.spyOn(service, 'findOneByUserId').mockResolvedValue(expectedResult);

      const result = await controller.findOneByUserId(String(userId));

      expect(result).toEqual(expectedResult);
      expect(service.findOneByUserId).toHaveBeenCalledWith(userId);
    });
  });

  describe('delete', () => {
    it('should delete a cart by id', async () => {
      const id: number = 1;
      const expectedResult: Cart = {
        id: 1,
        userId: 1,
       };

      jest.spyOn(service, 'delete').mockResolvedValue(expectedResult);

      const result = await controller.delete(String(id));

      expect(result).toEqual(expectedResult);
      expect(service.delete).toHaveBeenCalledWith(id);
    });
  });
});
