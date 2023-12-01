import { Test, TestingModule } from '@nestjs/testing';

import CartProductController from '@/cartProduct/cartProduct.controller';
import CartProductService from '@/cartProduct/cartProduct.service';

describe('CartProductController', () => {
  let controller: CartProductController;
  let cartProductService: CartProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartProductController],
      providers: [
        {
          provide: CartProductService,
          useValue: {
            create: jest.fn(),
            findAllByCartId: jest.fn(),
            findTotalPrice: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CartProductController>(CartProductController);
    cartProductService = module.get<CartProductService>(CartProductService);
  });

  describe('create', () => {
    it('should create a cart product', async () => {
      const cartProduct = { cartId: 1, productId: 1, quantity: 1 };
      const createdCartProduct = { id: 1, ...cartProduct };
      jest.spyOn(cartProductService, 'create').mockResolvedValueOnce(createdCartProduct);

      expect(await controller.create(cartProduct)).toBe(createdCartProduct);
      expect(cartProductService.create).toHaveBeenCalledWith(cartProduct);
    });
  });

  describe('findAllByCartId', () => {
    it('should return an array of cart products by cart id', async () => {
      const cartProducts = [{ id: 1, cartId: 1,productId: 1, quantity: 1 }, { id: 2, cartId: 1, productId: 2, quantity: 2 }];
      jest.spyOn(cartProductService, 'findAllByCartId').mockResolvedValueOnce(cartProducts);

      expect(await controller.findAllByCartId('1')).toBe(cartProducts);
      expect(cartProductService.findAllByCartId).toHaveBeenCalledWith(1);
    });
  });

  describe('findTotalPrice', () => {
    it('should return the total price of cart products by cart id', async () => {
      const totalPrice = 100;
      jest.spyOn(cartProductService, 'findTotalPrice').mockResolvedValueOnce(totalPrice);

      expect(await controller.findTotalPrice('1')).toBe(totalPrice);
      expect(cartProductService.findTotalPrice).toHaveBeenCalledWith(1);
    });
  });

  describe('update', () => {
    it('should update a cart product by id', async () => {
      const cartProduct = {
        id: 1,
        cartId: 1,
        productId: 1,
        quantity: 2 };
      jest.spyOn(cartProductService, 'update').mockResolvedValueOnce(cartProduct);

      expect(await controller.update('1', cartProduct)).toBe(cartProduct);
      expect(cartProductService.update).toHaveBeenCalledWith(1, cartProduct.quantity);
    });
  });

  describe('remove', () => {
    it('should remove a cart product by id', async () => {
      const cartProduct = {
        id: 1,
        cartId: 1,
        productId: 1,
        quantity: 1 };
      jest.spyOn(cartProductService, 'remove').mockResolvedValueOnce(cartProduct);

      expect(await controller.remove('1')).toBe(cartProduct);
      expect(cartProductService.remove).toHaveBeenCalledWith(1);
    });
  });
});
