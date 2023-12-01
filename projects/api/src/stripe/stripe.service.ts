import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51OCWakGYBnnyXwbrs8SVjDbpRWlbEGCLChYlGcqiTTxfUreAtw3qN9k4Dg9kJm7JrChLCRPI05E8FavYLh6UpfzV00y2Oun5SX', { apiVersion: '2023-10-16' });

@Injectable()
export default class StripeService {
  async checkout(paymentData: any): Promise<any> {
    const { id, amount } = paymentData;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'USD',
        description: 'Item description ',
        payment_method: id,
        confirm: true,
        return_url: 'http://localhost:3000/payment/payment-success'
      });

      console.log(payment);

      return { message: 'Successful Payment' };
    } catch (error) {
      console.log(error);
      return { message: error.raw.message };
    }
  }
}
