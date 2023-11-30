import { Test, TestingModule } from '@nestjs/testing';

import CreateCartProductDto from '../../../src/cartProduct/dto/create-cartProduct.dto';
import UpdateCartProductDto from '../../../src/cartProduct/dto/update-cartProduct.dto';

describe('UpdateCartProductDto', () => {
  let updateCartProductDto: UpdateCartProductDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateCartProductDto],
    }).compile();

    updateCartProductDto = module.get<UpdateCartProductDto>(UpdateCartProductDto);
  });

  describe('constructor', () => {
    it('should be defined', () => {
      expect(updateCartProductDto).toBeDefined();
    });
  });

  describe('properties', () => {
    it('should have all properties of CreateCartProductDto as optional', () => {
      const createCartProductDto = new CreateCartProductDto();
      const createCartProductDtoProperties = Object.getOwnPropertyNames(createCartProductDto);
      const updateCartProductDtoProperties = Object.getOwnPropertyNames(updateCartProductDto);

      createCartProductDtoProperties.forEach(property => {
        expect(updateCartProductDtoProperties).toContain(property);
      });
    });
  });
});
