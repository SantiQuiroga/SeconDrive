import { Test } from '@nestjs/testing';
import { CartProduct } from '@prisma/client';

import CartProductService from '@/cartProduct/cartProduct.service';
import CreateCartProductDto from '@/cartProduct/dto/create-cartProduct.dto';
import PrismaService from '@/prisma/prisma.service';

describe('CartProductService', () => {
  let cartProductService: CartProductService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        CartProductService,
        {
          provide: PrismaService,
          useValue: {
            cartProduct: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
            cart: {
              findUnique: jest.fn(),
            },
            product: {
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    cartProductService = moduleRef.get<CartProductService>(CartProductService);
    prismaService = moduleRef.get<PrismaService>(PrismaService);
  });

  describe('create', () => {
    it('should create a new cart product', async () => {
      const createCartProductDto: CreateCartProductDto = {
        cartId: 1,
        productId: 1,
        quantity: 1,
      };
      const createdCartProduct: CartProduct = {
        id: 1,
        cartId: 1,
        productId: 1,
        quantity: 1,
      };

      jest.spyOn(prismaService.cartProduct, 'create').mockResolvedValue(createdCartProduct);

      const result = await cartProductService.create(createCartProductDto);

      expect(prismaService.cartProduct.create).toHaveBeenCalledWith({
        data: createCartProductDto,
      });
      expect(result).toEqual(createdCartProduct);
    });
  });

  describe('findAllByCartId', () => {
    it('should find all cart products by cartId', async () => {
      const cartId = 1;
      const foundCartProducts: CartProduct[] = [
        {
          id: 1,
          cartId: 1,
          productId: 1,
          quantity: 1,
        },
        {
          id: 2,
          cartId: 1,
          productId: 2,
          quantity: 2,
        },
      ];

      jest.spyOn(prismaService.cartProduct, 'findMany').mockResolvedValue(foundCartProducts);

      const result = await cartProductService.findAllByCartId(cartId);

      expect(prismaService.cartProduct.findMany).toHaveBeenCalledWith({
        where: { cartId, quantity: { gt: 0 } },
      });
      expect(result).toEqual(foundCartProducts);
    });
  });

  describe('findTotalPrice', () => {
    it('should calculate the total price of a cart', async () => {
      const cartId = 1;
      const cartProducts: CartProduct[] = [
        {
          id: 1,
          cartId: 1,
          productId: 1,
          quantity: 1,
        },
        {
          id: 2,
          cartId: 1,
          productId: 2,
          quantity: 1,
        },
      ];
      const product1 = {
        id: 1,
        categoryId: 1,
        name: 'product1',
        description: 'product1',
        brand: 'product1brand',
        image: 'product1image',
        price: 10,
        stock: 10,
        unitSold: 0,
        discount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      const product2 = {
        id: 2,
        categoryId: 2,
        name: 'product2',
        description: 'product2',
        brand: 'product2brand',
        image: 'product2image',
        price: 20,
        stock: 20,
        unitSold: 0,
        discount: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.cartProduct, 'findMany').mockResolvedValue(cartProducts);
      jest.spyOn(prismaService.product, 'findUnique').mockResolvedValueOnce(product1).mockResolvedValueOnce(product2);

      const result = await cartProductService.findTotalPrice(cartId);

      expect(prismaService.cartProduct.findMany).toHaveBeenCalledWith({
        where: { cartId },
      });
      expect(prismaService.product.findUnique).toHaveBeenNthCalledWith(1, {
        where: { id: 1 },
      });
      expect(prismaService.product.findUnique).toHaveBeenNthCalledWith(2, {
        where: { id: 2 },
      });
      expect(result).toEqual(30);
    });
  });

  describe('update', () => {
    it('should update the quantity of a cart product', async () => {
      const id = 1;
      const cartId = 1;
      const productId = 1;
      const quantity = 2;

      jest.spyOn(prismaService.cartProduct, 'update').mockResolvedValue({ id, cartId, productId, quantity });

      const result = await cartProductService.update(id, quantity);

      expect(prismaService.cartProduct.update).toHaveBeenCalledWith({
        where: { id },
        data: { quantity },
      });
      expect(result).toEqual({ id, cartId, productId, quantity });
    });

    it('should remove a cart product if the quantity is 0', async () => {
      const id = 1;
      const cartId = 1;
      const productId = 1;
      const quantity = 0;

      jest.spyOn(cartProductService, 'remove').mockResolvedValue({ id,cartId, productId, quantity });

      const result = await cartProductService.update(id, quantity);

      expect(cartProductService.remove).toHaveBeenCalledWith(id);
      expect(result).toEqual({ id, cartId, productId, quantity });
    });
  });

  describe('remove', () => {
    it('should remove a cart product by id', async () => {
      const id = 1;
      const cartId = 1;
      const productId = 1;
      const quantity = 0;

      jest.spyOn(prismaService.cartProduct, 'delete').mockResolvedValue({ id, cartId, productId, quantity });

      const result = await cartProductService.remove(id);

      expect(prismaService.cartProduct.delete).toHaveBeenCalledWith({
        where: { id },
      });
      expect(result).toEqual({ id, cartId, productId, quantity });
    });

describe('findAll', () => {
  it('should find all cart products', async () => {
    const foundCartProducts: CartProduct[] = [
      {
        id: 1,
        cartId: 1,
        productId: 1,
        quantity: 1,
      },
      {
        id: 2,
        cartId: 1,
        productId: 2,
        quantity: 2,
      },
    ];

    jest.spyOn(prismaService.cartProduct, 'findMany').mockResolvedValue(foundCartProducts);

    const result = await cartProductService.findAll();

    expect(prismaService.cartProduct.findMany).toHaveBeenCalledWith();
    expect(result).toEqual(foundCartProducts);
  });
});

describe('findAllByUserId', () => {
  it('should find all cart products by user ID', async () => {
    const userId = 1;
    const cartId = 1;
    const foundCartProducts: CartProduct[] = [
      {
        id: 1,
        cartId,
        productId: 1,
        quantity: 1,
      },
      {
        id: 2,
        cartId,
        productId: 2,
        quantity: 2,
      },
    ];


    jest.spyOn(cartProductService, 'findAllByCartId').mockResolvedValue(foundCartProducts);

    const result = await cartProductService.findAllByUserId(userId);

    expect(prismaService.cart.findUnique).toHaveBeenCalledWith({ where: { userId } });
    expect(result).toEqual(foundCartProducts);
  });
});
  });
});
