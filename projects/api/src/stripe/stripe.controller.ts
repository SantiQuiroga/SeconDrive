import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import StripeEntity from './stripe.entity';
import StripeService from './stripe.service';

@ApiTags('Stripe')
@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) {}

  @Post()
  checkout(@Body() body: { cart: StripeEntity }) {
    try {
      return this.stripeService.checkout(body.cart);
    } catch (error) {
      return error;
    }
  }
}

export default StripeController;
