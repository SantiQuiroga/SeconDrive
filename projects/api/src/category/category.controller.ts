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

import CategoryService from './category.service';
import Category from './entities/category.entity';

@Controller('category')
@ApiTags('Category')
export default class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category);
  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() category: Category
  ): Promise<Category> {
    return this.categoryService.update(Number(id), category);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Category> {
    return this.categoryService.remove(Number(id));
  }
}
