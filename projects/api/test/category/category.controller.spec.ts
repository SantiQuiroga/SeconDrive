
import { Test, TestingModule } from '@nestjs/testing';

import CategoryController from '../../src/category/category.controller';
import CategoryService from '../../src/category/category.service';
import Category from '../../src/category/entities/category.entity';

describe('CategoryController', () => {
    let controller: CategoryController;
    let service: CategoryService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CategoryController],
            providers: [
                {
                    provide: CategoryService,
                    useValue: {
                        create: jest.fn(),
                        findAll: jest.fn(),
                        findOne: jest.fn(),
                        update: jest.fn(),
                        remove: jest.fn(),
                    },
                },
            ],
        }).compile();
    
        controller = module.get<CategoryController>(CategoryController);
        service = module.get<CategoryService>(CategoryService);
    });

    describe('create', () => {
        it('should create a category', async () => {
            const category: Category = { 
                id: 1, name: 'Test Category',
                createdAt: new Date(), updatedAt: new Date(), };
            jest.spyOn(service, 'create').mockResolvedValue(category);

            expect(await controller.create(category)).toBe(category);
        });
    });

    describe('findAll', () => {
        it('should return an array of categories', async () => {
            const categories: Category[] = [
                { id: 1, name: 'Test Category 1',
                    createdAt: new Date(), updatedAt: new Date(), },
                { id: 2, name: 'Test Category 2',
                    createdAt: new Date(), updatedAt: new Date(), },
            ];
            jest.spyOn(service, 'findAll').mockResolvedValue(categories);

            expect(await controller.findAll()).toBe(categories);
        });
    });

    describe('findOne', () => {
        it('should return a category by id', async () => {
            const category: Category = {
                id: 1, name: 'Test Category',
                createdAt: new Date(), updatedAt: new Date(), };
            jest.spyOn(service, 'findOne').mockResolvedValue(category);

            expect(await controller.findOne('1')).toBe(category);
        });
    });

    describe('update', () => {
        it('should update a category by id', async () => {
            const category: Category = {
                id: 1, name: 'Test Category',
                createdAt: new Date(), updatedAt: new Date(), };
            jest.spyOn(service, 'update').mockResolvedValue(category);

            expect(await controller.update('1', category)).toBe(category);
        });
    });

    describe('remove', () => {
        it('should remove a category by id', async () => {
            const category: Category = {
                id: 1, name: 'Test Category',
                createdAt: new Date(), updatedAt: new Date(), };
            jest.spyOn(service, 'remove').mockResolvedValue(category);

            expect(await controller.remove('1')).toBe(category);
        });
    });
});
