
import { Test, TestingModule } from '@nestjs/testing';
import { Product } from '@prisma/client';

import PrismaService from '@/prisma/prisma.service';
import CreateProductDto from '@/product/dto/create-product.dto';
import UpdateProductDto from '@/product/dto/update-product.dto';
import ProductService from '@/product/product.service';

describe('ProductService', () => {
    let productService: ProductService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ProductService,
                {
                    provide: PrismaService,
                    useValue: {
                        product: {
                            create: jest.fn(),
                            findMany: jest.fn(),
                            findUnique: jest.fn(),
                            update: jest.fn(),
                            delete: jest.fn(),
                        },
                    },
                },
            ],
        }).compile();

        productService = module.get<ProductService>(ProductService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('create', () => {
        it('should create a product', async () => {
            const createProductDto: CreateProductDto = {
                name: 'Test Product',
                price: 10.99,
                categoryId: 1,
                description: '',
                brand: 'abc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
            };
            const createdProduct: Product = {
                id: 1,
                name: 'Test Product',
                price: 10.99,
                categoryId: 1,
                description: '',
                brand: 'abc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            jest.spyOn(prismaService.product, 'create').mockResolvedValue(createdProduct);

            const result = await productService.create(createProductDto);

            expect(prismaService.product.create).toHaveBeenCalledWith({ data: createProductDto });
            expect(result).toEqual(createdProduct);
        });
    });

    describe('findAll', () => {
        it('should return an array of products', async () => {
            const products: Product[] = [
                {
                    id: 1,
                    name: 'Test Product 1',
                    price: 10.99,
                    categoryId: 1,
                    description: '',
                    brand: 'abc',
                    image: '',
                    stock: 0,
                    unitSold: 0,
                    discount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    name: 'Test Product 2',
                    price: 20.99,
                    categoryId: 2,
                    description: '',
                    brand: 'abc',
                    image: '',
                    stock: 0,
                    unitSold: 0,
                    discount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ];
            jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(products);

            const result = await productService.findAll();

            expect(prismaService.product.findMany).toHaveBeenCalled();
            expect(result).toEqual(products);
        });
    });

    describe('findOne', () => {
        describe('create', () => {
          it('should create a new product', async () => {
            const createProductDto: CreateProductDto = {
              name: 'Test Product',
              price: 10.99,
              categoryId: 1,
              description: '',
              brand: 'abc',
              image: '',
              stock: 0,
              unitSold: 0,
              discount: 0,
            };
            const createdProduct: Product = {
              id: 1,
              name: 'Test Product',
              price: 10.99,
              categoryId: 1,
              description: '',
              brand: 'abc',
              image: '',
              stock: 0,
              unitSold: 0,
              discount: 0,
              createdAt: new Date(),
              updatedAt: new Date()
            };
            jest.spyOn(prismaService.product, 'create').mockResolvedValue(createdProduct);

            const result = await productService.create(createProductDto);

            expect(prismaService.product.create).toHaveBeenCalledWith({ data: createProductDto });
            expect(result).toEqual(createdProduct);
          });
        });
    });

    describe('findAllByName', () => {
        it('should return an array of products by name', async () => {
            const products: Product[] = [
                {
                    id: 1,
                    name: 'Test Product 1',
                    price: 10.99,
                    categoryId: 1,
                    description: '',
                    brand: 'abc',
                    image: '',
                    stock: 0,
                    unitSold: 0,
                    discount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    name: 'Test Product 2',
                    price: 20.99,
                    categoryId: 2,
                    description: '',
                    brand: 'abc',
                    image: '',
                    stock: 0,
                    unitSold: 0,
                    discount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ];
            jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(products);

            const result = await productService.findAllByName('Test Product');

            expect(prismaService.product.findMany).toHaveBeenCalledWith({ where: { "name": {
                  "contains": "Test Product",
                   "mode": "insensitive",
                 },}
                });
            expect(result).toEqual(products);
        });
    });

    describe('findAllByCategoryId', () => {
        it('should return an array of products by categoryId', async () => {
            const products: Product[] = [
                {
                    id: 1,
                    name: 'Test Product 1',
                    price: 10.99,
                    categoryId: 1,
                    description: '',
                    brand: 'abc',
                    image: '',
                    stock: 0,
                    unitSold: 0,
                    discount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    id: 2,
                    name: 'Test Product 2',
                    price: 20.99,
                    categoryId: 1,
                    description: '',
                    brand: 'abc',
                    image: '',
                    stock: 0,
                    unitSold: 0,
                    discount: 0,
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
            ];
            jest.spyOn(prismaService.product, 'findMany').mockResolvedValue(products);

            const result = await productService.findAllByCategoryId(1);

            expect(prismaService.product.findMany).toHaveBeenCalledWith({ where: { categoryId: 1 } });
            expect(result).toEqual(products);
        });
    });

    describe('update', () => {
        it('should update a product by id', async () => {
            const updateProductDto: UpdateProductDto = {
                name: 'Updated Test Product',
                price: 15.99,
                categoryId: 2,
            };
            const updatedProduct: Product = {
                id: 1,
                name: 'Updated Test Product',
                price: 15.99,
                categoryId: 2,
                description: '',
                brand: 'abc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            jest.spyOn(prismaService.product, 'update').mockResolvedValue(updatedProduct);

            const result = await productService.update(1, updateProductDto);

            expect(prismaService.product.update).toHaveBeenCalledWith({
                where: { id: 1 },
                data: updateProductDto,
            });
            expect(result).toEqual(updatedProduct);
        });
    });

    describe('remove', () => {
        it('should delete a product by id', async () => {
            const deletedProduct: Product = {
                id: 1,
                name: 'Test Product',
                price: 10.99,
                categoryId: 1,
                description: '',
                brand: 'abc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            jest.spyOn(prismaService.product, 'delete').mockResolvedValue(deletedProduct);

            const result = await productService.remove(1);

            expect(prismaService.product.delete).toHaveBeenCalledWith({ where: { id: 1 } });
            expect(result).toEqual(deletedProduct);
        });
    });
});
