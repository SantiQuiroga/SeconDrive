import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';

export default class CategoryEntity implements Category {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
