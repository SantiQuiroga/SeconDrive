import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Cart } from './Cart.model';
import { StripeService } from './stripe.service';

@ApiTags('Stripe')
@Controller('stripe')
export class StripeController {
  constructor(private stripeService: StripeService) { }

  @Post()
  checkout(@Body() body: { cart: Cart }) {
    try {
      return this.stripeService.checkout(body.cart);
    } catch (error) {
      return error;
    }
  }
}
