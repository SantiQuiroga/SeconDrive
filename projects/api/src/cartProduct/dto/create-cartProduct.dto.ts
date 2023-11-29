import { ApiProperty } from '@nestjs/swagger';
import { CartProduct } from '@prisma/client';
import { IsInt, IsNotEmpty } from 'class-validator';


export default class CreateCartProductDto implements CartProduct {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  cartId: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  quantity: number;
}
