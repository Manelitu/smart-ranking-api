import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '@/base';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateCategoryDTO } from '../dtos';
import { CategoryEntity } from '@/core/entities/category.entity';

@Injectable()
export class UpdateCategory implements UseCase<CategoryEntity> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryEntity>,
  ) {}

  async execute(
    param: UpdateCategoryDTO,
    category: string,
  ): Promise<CategoryEntity> {
    const hasCategory = await this.categoryModel.findOne({ category }).exec();

    if (!hasCategory) throw new NotFoundException('Category doesnt exists');

    return this.categoryModel.findByIdAndUpdate({ category }, { $set: param });
  }
}
