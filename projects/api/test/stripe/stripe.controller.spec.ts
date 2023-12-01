import { Test } from '@nestjs/testing';

import StripeController from '../../src/stripe/stripe.controller';
import StripeService from '../../src/stripe/stripe.service';

describe('StripeController', () => {
  let stripeController: StripeController;
  let stripeService: StripeService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [StripeController],
      providers: [StripeService],
    }).compile();

    stripeController = moduleRef.get<StripeController>(StripeController);
    stripeService = moduleRef.get<StripeService>(StripeService);
  });

  describe('checkout', () => {
    it('should return successful payment message', async () => {
      // Arrange
      const paymentData = {
        id: 'paymentId',
        amount: 100,
      };
      const expectedResult = { message: 'Successful Payment' };

      jest.spyOn(stripeService, 'checkout').mockResolvedValue(expectedResult);

      // Act
      const result = await stripeController.checkout(paymentData);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });
});
