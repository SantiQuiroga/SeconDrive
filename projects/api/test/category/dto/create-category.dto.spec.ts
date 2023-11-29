import { Test, TestingModule } from '@nestjs/testing';

import CreateCategoryDto from '../../../src/category/dto/create-category.dto';
import UpdateCategoryDto from '../../../src/category/dto/update-category.dto';

describe('UpdateCategoryDto', () => {
  let updateCategoryDto: UpdateCategoryDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateCategoryDto],
    }).compile();

    updateCategoryDto = module.get<UpdateCategoryDto>(UpdateCategoryDto);
  });

  describe('constructor', () => {
    it('should be defined', () => {
      expect(updateCategoryDto).toBeDefined();
    });
  });

  describe('properties', () => {
    it('should have all properties of CreateCategoryDto as optional', () => {
      const createCategoryDto = new CreateCategoryDto();
      const createCategoryDtoProperties = Object.getOwnPropertyNames(createCategoryDto);
      const updateCategoryDtoProperties = Object.getOwnPropertyNames(updateCategoryDto);

      createCategoryDtoProperties.forEach(property => {
        expect(updateCategoryDtoProperties).toContain(property);
      });
    });
  });
});

