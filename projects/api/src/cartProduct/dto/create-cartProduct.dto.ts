import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';


export default class CreateCartProductDto {
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
