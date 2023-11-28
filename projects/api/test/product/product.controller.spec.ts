
import { Test, TestingModule } from '@nestjs/testing';

import Product from '@/product/entities/product.entity';
import ProductController from '@/product/product.controller';
import ProductService from '@/product/product.service';

describe('ProductController', () => {
    let controller: ProductController;
    let productService: ProductService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ProductController],
            providers: [
                {
                    provide: ProductService,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        findAllByName: jest.fn(),
                        findAllByCategoryId: jest.fn(),
                        update: jest.fn(),
                        remove: jest.fn(),
                    },
                },
            ],
        }).compile();

        controller = module.get<ProductController>(ProductController);
        productService = module.get<ProductService>(ProductService);
    });

    describe('create', () => {
        it('should create a product', async () => {
            const product: Product = {
                name: 'Test Product',
                price: 10,
                id: 0,
                categoryId: 0,
                description: 'brief description',
                brand: 'ccc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date("2023-11-09T16:56:18.683Z")
            };
            const createdProduct: Product = { id: 1, ...product };
            jest.spyOn(productService, 'create').mockResolvedValueOnce(createdProduct);

            expect(await controller.create(product)).toBe(createdProduct);
            expect(productService.create).toHaveBeenCalledWith(product);
        });
    });

    describe('findAll', () => {
        it('should return an array of products', async () => {
            const products: Product[] = [
                { id: 1, name: 'Test Product 1', price: 10, categoryId: 1, description: 'description 1', brand: 'ccc', image: '', stock: 0, unitSold: 0, discount: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 2, name: 'Test Product 2', price: 20, categoryId: 2, description: 'description 2', brand: 'ccc', image: '', stock: 0, unitSold: 0, discount: 0, createdAt: new Date(), updatedAt: new Date() }
            ];
            jest.spyOn(productService, 'findAll').mockResolvedValueOnce(products);

            expect(await controller.findAll()).toBe(products);
            expect(productService.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne', () => {
        it('should return a product by id', async () => {
            const product: Product = { id: 1, name: 'Test Product', price: 10, categoryId: 1, description: 'description', brand: 'ccc', image: '', stock: 0, unitSold: 0, discount: 0, createdAt: new Date(), updatedAt: new Date() };
            jest.spyOn(productService, 'findOne').mockResolvedValueOnce(product);

            expect(await controller.findOne('1')).toBe(product);
            expect(productService.findOne).toHaveBeenCalledWith(1);
        });
    });

    describe('findAllByName', () => {
        it('should return an array of products by name', async () => {
            const products: Product[] = [
                { id: 1, name: 'Test Product 1', price: 10, categoryId: 1, description: 'description 1', brand: 'ccc', image: '', stock: 0, unitSold: 0, discount: 0, createdAt: new Date(), updatedAt: new Date() },
                { id: 2, name: 'Test Product 2', price: 20, categoryId: 2, description: 'description 2', brand: 'ccc', image: '', stock: 0, unitSold: 0, discount: 0, createdAt: new Date(), updatedAt: new Date() }
            ];
            jest.spyOn(productService, 'findAll').mockResolvedValueOnce(products);

            expect(await controller.findAll()).toBe(products);
            expect(productService.findAll).toHaveBeenCalled();
        });
    });

    describe('findOne2', () => {
        it('should return a product by id', async () => {
            const product: Product = {
                id: 1, name: 'Test Product', price: 10,
                categoryId: 0,
                description: '',
                brand: 'ccc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date("2023-11-09T16:56:18.683Z")
            };
            jest.spyOn(productService, 'findOne').mockResolvedValueOnce(product);

            expect(await controller.findOne('1')).toBe(product);
            expect(productService.findOne).toHaveBeenCalledWith(1);
        });
    });

    describe('findAllByName2', () => {
        it('should return an array of products by name', async () => {
            const products: Product[] = [{
                 id: 1, name: 'Test Product 1', price: 10,
                 categoryId: 0,
                 description: '',
                 brand: 'ccc',
                 image: '',
                 stock: 0,
                 unitSold: 0,
                 discount: 0,
                 createdAt: new Date(),
                 updatedAt: new Date("2023-11-09T16:56:18.683Z") },
                 { id: 2, name: 'Test Product 2', price: 20,
                 categoryId: 0,
                 description: '',
                 brand: 'ccc',
                 image: '',
                 stock: 0,
                 unitSold: 0,
                 discount: 0,
                 createdAt: new Date(),
                 updatedAt: new Date("2023-11-09T16:56:18.683Z")}];
            jest.spyOn(productService, 'findAllByName').mockResolvedValueOnce(products);

            expect((await controller.findAllByName('Test Product')).products).toBe(products);
            expect(productService.findAllByName).toHaveBeenCalledWith('Test Product');
        });
    });

    describe('findAllByCategoryId', () => {
        it('should return an array of products by category id', async () => {
            const products: Product[] = [{
                id: 1, name: 'Test Product 1', price: 10,
                categoryId: 0,
                description: '',
                brand: 'ccc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date("2023-11-09T16:56:18.683Z") },
                 { id: 2, name: 'Test Product 2', price: 20,
                 categoryId: 0,
                 description: '',
                 brand: 'ccc',
                 image: '',
                 stock: 0,
                 unitSold: 0,
                 discount: 0,
                 createdAt: new Date(),
                 updatedAt: new Date("2023-11-09T16:56:18.683Z") }];
            jest.spyOn(productService, 'findAllByCategoryId').mockResolvedValueOnce(products);

            expect(await controller.findAllByCategoryId('1')).toBe(products);
            expect(productService.findAllByCategoryId).toHaveBeenCalledWith(1);
        });
    });

    describe('update', () => {
        it('should update a product by id', async () => {
            const product: Product = {
                id: 1, name: 'Test Product', price: 10,
                categoryId: 0,
                description: '',
                brand: 'ccc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date("2023-11-09T16:56:18.683Z") };
            jest.spyOn(productService, 'update').mockResolvedValueOnce(product);

            expect(await controller.update('1', product)).toBe(product);
            expect(productService.update).toHaveBeenCalledWith(1, product);
        });
    });

    describe('remove', () => {
        it('should remove a product by id', async () => {
            const product: Product = {
                id: 1, name: 'Test Product', price: 10,
                categoryId: 0,
                description: '',
                brand: 'ccc',
                image: '',
                stock: 0,
                unitSold: 0,
                discount: 0,
                createdAt: new Date(),
                updatedAt: new Date("2023-11-09T16:56:18.683Z") };
            jest.spyOn(productService, 'remove').mockResolvedValueOnce(product);

            expect(await controller.remove('1')).toBe(product);
            expect(productService.remove).toHaveBeenCalledWith(1);
        });
    });
});
