import { ApiProperty } from '@nestjs/swagger';
import { Product } from '@prisma/client';

import CategoryEntity from '../../category/entities/category.entity';

export default class ProductEntity implements Product {
  @ApiProperty()
  id: number;

  @ApiProperty()
  categoryId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ type: () => CategoryEntity })
  category?: CategoryEntity;
}
