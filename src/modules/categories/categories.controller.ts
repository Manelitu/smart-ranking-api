import {
  Body,
  Controller,
  Post,
  UsePipes,
  Get,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCategoryDTO } from './dtos/create-category.dto';
import { CategoryEntity } from '@/core/entities/category.entity';
import { CreateCategory, FindByIdCategory, ListCategory } from './usecases';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(
    private readonly createCategory: CreateCategory,
    private readonly listCategory: ListCategory,
    private readonly findCategoryById: FindByIdCategory,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createCategoryDTO: CreateCategoryDTO,
  ): Promise<CategoryEntity> {
    return this.createCategory.execute(createCategoryDTO);
  }

  @Get()
  async find(): Promise<CategoryEntity[]> {
    return this.listCategory.execute();
  }

  @Get('/:id')
  async findById(@Param('id') id: string): Promise<CategoryEntity> {
    return this.findCategoryById.execute(id);
  }
}
