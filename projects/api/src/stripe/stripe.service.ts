import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

import StripeEntity from './stripe.entity';

@Injectable()
export default class StripeService {
  private stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2023-10-16',
    });
  }

  checkout(cart: StripeEntity) {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    return this.stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: 'usd',
      payment_method_types: ['card'],
    });
  }
}
