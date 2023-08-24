import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCategoryDTO } from './dtos/create-category.dto';
import { CategoryEntity } from '@/core/entities/category.entity';
import { CreateCategory } from './usecases/index';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly createCategory: CreateCategory) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createCategoryDTO: CreateCategoryDTO,
  ): Promise<CategoryEntity> {
    return this.createCategory.execute(createCategoryDTO);
  }
}
