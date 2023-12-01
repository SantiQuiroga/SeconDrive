import { ApiProperty } from "@nestjs/swagger";
import { Cart } from "@prisma/client";

export default class CartEntity implements Cart {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number;
}
