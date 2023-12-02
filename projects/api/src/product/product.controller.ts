import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import Product from './entities/product.entity';
import ProductService from './product.service';

@Controller('product')
@ApiTags('Product')
export default class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    const prd = await this.productService.create(product);
    return prd;
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(Number(id));
  }

  @Get('search/:name')
  async findAllByName(@Param('name') name: string) {
    const products = await this.productService.findAllByName(name);
    return { products };
  }

  @Get('/category/:categoryid')
  findAllByCategoryId(
    @Param('categoryid') categoryid: string
  ): Promise<Product[]> {
    return this.productService.findAllByCategoryId(Number(Number(categoryid)));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() product: Product): Promise<Product> {
    return this.productService.update(Number(id), product);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Product> {
    return this.productService.remove(Number(id));
  }
}
