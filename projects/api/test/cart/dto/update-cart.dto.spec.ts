import { Test, TestingModule } from '@nestjs/testing';

import CreateCartDto from '../../../src/cart/dto/create-cart.dto';
import UpdateCartDto from '../../../src/cart/dto/update-cart.dto';

describe('UpdateCartDto', () => {
  let updateCartDto: UpdateCartDto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UpdateCartDto],
    }).compile();

    updateCartDto = module.get<UpdateCartDto>(UpdateCartDto);
  });

  describe('constructor', () => {
    it('should be defined', () => {
      expect(updateCartDto).toBeDefined();
    });
  });

  describe('properties', () => {
    it('should have all properties of CreateCartDto as optional', () => {
      const createCartDto = new CreateCartDto();
      const createCartDtoProperties = Object.getOwnPropertyNames(createCartDto);
      const updateCartDtoProperties = Object.getOwnPropertyNames(updateCartDto);

      createCartDtoProperties.forEach(property => {
        expect(updateCartDtoProperties).toContain(property);
      });
    });
  });
});
