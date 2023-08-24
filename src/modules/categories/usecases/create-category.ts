import { Injectable, ConflictException } from '@nestjs/common';
import { UseCase } from '@/base';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDTO } from '../dtos/create-category.dto';
import { CategoryEntity } from '@/core/entities/category.entity';

@Injectable()
export class CreateCategory implements UseCase<CategoryEntity> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryEntity>,
  ) {}

  async execute(param: CreateCategoryDTO): Promise<CategoryEntity> {
    const { category } = param;
    const hasCategory = await this.categoryModel.findOne({ category }).exec();

    if (hasCategory) throw new ConflictException('Category already exists');

    const newCategory = new this.categoryModel(param);
    return newCategory.save();
  }
}
