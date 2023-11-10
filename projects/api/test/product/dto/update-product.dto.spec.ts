
import { Test, TestingModule } from '@nestjs/testing';

import CreateProductDto from '../../../src/product/dto/create-product.dto';
import UpdateProductDto from '../../../src/product/dto/update-product.dto';

describe('UpdateProductDto', () => {
    let updateProductDto: UpdateProductDto;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UpdateProductDto],
        }).compile();

        updateProductDto = module.get<UpdateProductDto>(UpdateProductDto);
    });

    describe('constructor', () => {
        it('should be defined', () => {
            expect(updateProductDto).toBeDefined();
        });
    });

    describe('extends', () => {
        it('should extend CreateProductDto', () => {
            expect(updateProductDto).toBeInstanceOf(UpdateProductDto);
        });
    });

    describe('properties', () => {
        it('should have all properties of CreateProductDto as optional', () => {
            const createProductDto = new CreateProductDto();
            const createProductDtoProperties = Object.getOwnPropertyNames(createProductDto);
            const updateProductDtoProperties = Object.getOwnPropertyNames(updateProductDto);

            createProductDtoProperties.forEach(property => {
                expect(updateProductDtoProperties).toContain(property);
            });
        });
    });
});
