import { Injectable } from '@nestjs/common';
import { CreatePlayerMapper } from '@/modules/players/mappers/create-player.mapper';
import { UseCase } from '@/base';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDTO } from '../dtos/create-category.dto';
import { CategoryEntity } from '@/core/entities/category.entity';

@Injectable()
export class CreateCategory implements UseCase<CategoryEntity> {
  private mapper: CreatePlayerMapper = new CreatePlayerMapper();

  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryEntity>,
  ) {}

  async execute(param: CreateCategoryDTO): Promise<CategoryEntity> {
    return this.categoryModel.create(param);
  }
}
