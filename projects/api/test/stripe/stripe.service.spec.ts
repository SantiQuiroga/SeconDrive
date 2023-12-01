import Stripe from 'stripe';

import StripeService from '../../src/stripe/stripe.service';

const stripe = new Stripe(
  'sk_test_51OCWakGYBnnyXwbrs8SVjDbpRWlbEGCLChYlGcqiTTxfUreAtw3qN9k4Dg9kJm7JrChLCRPI05E8FavYLh6UpfzV00y2Oun5SX',
  { apiVersion: '2023-10-16' }
);

describe('StripeService', () => {
  let stripeService: StripeService;

  beforeEach(() => {
    stripeService = new StripeService();
  });

  describe('checkout', () => {
    it('should return error message if payment fails', async () => {
      // Arrange
      const paymentData = {
        id: 'paymentId',
        paymentMethod: 'paymentMethod',
        amount: 100,
      };

      jest
        .spyOn(stripe.paymentIntents, 'create')
        .mockRejectedValueOnce(new Error('Payment failed'));

      // Act
      const result = await stripeService.checkout(paymentData);

      // Assert
      expect(result).toEqual({ message: "No such PaymentMethod: 'paymentId'" });
    });
  });
});
