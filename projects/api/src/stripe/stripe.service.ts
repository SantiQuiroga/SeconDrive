import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

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
        return_url: 'http://localhost:3000/payment/payment-success',
      });

      console.log(payment);

      return { message: 'Successful Payment' };
    } catch (error) {
      console.log(error);
      return { message: error.raw.message };
    }
  }
}
