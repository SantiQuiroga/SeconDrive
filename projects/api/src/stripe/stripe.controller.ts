import { Body, Controller, Post } from '@nestjs/common';

import StripeService from './stripe.service';

@Controller('stripe')
export default class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  async checkout(@Body() paymentData: { id: string; amount: number }) {
    return this.stripeService.checkout(paymentData);
  }
}
