import { Test, TestingModule } from '@nestjs/testing';
import { Category } from '@prisma/client';

import CategoryService from '@/category/category.service';
import CreateCategoryDto from '@/category/dto/create-category.dto';
import UpdateCategoryDto from '@/category/dto/update-category.dto';
import PrismaService from '@/prisma/prisma.service';

describe('CategoryService', () => {
    let service: CategoryService;
    let prismaService: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CategoryService,
                {
                    provide: PrismaService,
                    useValue: {
                        category: {
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

        service = module.get<CategoryService>(CategoryService);
        prismaService = module.get<PrismaService>(PrismaService);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('create', () => {
        it('should create a category', async () => {
            const createCategoryDto: CreateCategoryDto = {
                name: 'Test Category',
            };
            const createdCategory: Category = {
                id: 1,
                name: 'Test Category',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            jest.spyOn(prismaService.category, 'create').mockResolvedValue(createdCategory);

            const result = await service.create(createCategoryDto);

            expect(prismaService.category.create).toHaveBeenCalledWith({
                data: createCategoryDto,
            });
            expect(result).toEqual(createdCategory);
        });
    });

    describe('findAll', () => {
        it('should return an array of categories', async () => {
            const categories: Category[] = [
                {
                    id: 1,
                    name: 'Category 1',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    id: 2,
                    name: 'Category 2',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ];
            jest.spyOn(prismaService.category, 'findMany').mockResolvedValue(categories);

            const result = await service.findAll();

            expect(prismaService.category.findMany).toHaveBeenCalled();
            expect(result).toEqual(categories);
        });
    });

    describe('findOne', () => {
        it('should return a category by id', async () => {
            const id = 1;
            const category: Category = {
                id,
                name: 'Test Category',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            jest.spyOn(prismaService.category, 'findUnique').mockResolvedValue(category);

            const result = await service.findOne(id);

            expect(prismaService.category.findUnique).toHaveBeenCalledWith({
                where: {
                    id,
                },
            });
            expect(result).toEqual(category);
        });
    });

    describe('update', () => {
        it('should update a category by id', async () => {
            const id = 1;
            const updateCategoryDto: UpdateCategoryDto = {
                name: 'Updated Category',
            };
            const updatedCategory: Category = {
                id,
                name: 'Updated Category',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            jest.spyOn(prismaService.category, 'update').mockResolvedValue(updatedCategory);

            const result = await service.update(id, updateCategoryDto);

            expect(prismaService.category.update).toHaveBeenCalledWith({
                where: { id },
                data: updateCategoryDto,
            });
            expect(result).toEqual(updatedCategory);
        });
    });

    describe('remove', () => {
        it('should delete a category by id', async () => {
            const id = 1;
            const deletedCategory: Category = {
                id,
                name: 'Test Category',
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            jest.spyOn(prismaService.category, 'delete').mockResolvedValue(deletedCategory);

            const result = await service.remove(id);

            expect(prismaService.category.delete).toHaveBeenCalledWith({
                where: { id },
            });
            expect(result).toEqual(deletedCategory);
        });
    });
});
