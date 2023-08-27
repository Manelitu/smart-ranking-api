import {
  Body,
  Controller,
  Post,
  UsePipes,
  Get,
  Param,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateCategoryDTO,
  InsertPlayerOnCategoryDTO,
  UpdateCategoryDTO,
} from './dtos';
import { CategoryEntity } from '@/core/entities/category.entity';
import {
  CreateCategory,
  FindByCategory,
  ListCategory,
  UpdateCategory,
} from './usecases';
import { InsertPlayerOnCategory } from './usecases/insert-player-on-category';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(
    private readonly createCategory: CreateCategory,
    private readonly listCategory: ListCategory,
    private readonly findCategoryById: FindByCategory,
    private readonly updateCategory: UpdateCategory,
    private readonly insertPlayerOnCategory: InsertPlayerOnCategory,
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createCategoryDTO: CreateCategoryDTO,
  ): Promise<CategoryEntity> {
    return this.createCategory.execute(createCategoryDTO);
  }

  @Get()
  @UsePipes(ValidationPipe)
  async find(): Promise<CategoryEntity[]> {
    return this.listCategory.execute();
  }

  @Get('/:category')
  @UsePipes(ValidationPipe)
  async findByCategory(
    @Param('category') category: string,
  ): Promise<CategoryEntity> {
    return this.findCategoryById.execute(category);
  }

  @Put('/:category')
  @UsePipes(ValidationPipe)
  async update(
    @Body() updateCategoryDTO: UpdateCategoryDTO,
    @Param('category') category: string,
  ): Promise<CategoryEntity> {
    return this.updateCategory.execute(updateCategoryDTO, category);
  }

  @Post('/:category/player/:playerId')
  @UsePipes(ValidationPipe)
  async insertPlayer(@Param() params: InsertPlayerOnCategoryDTO): Promise<any> {
    return this.insertPlayerOnCategory.execute(params);
  }
}
