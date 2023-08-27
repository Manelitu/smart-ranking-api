import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UseCase } from '@/base';
import { CategoryEntity } from '@/core/entities/category.entity';

@Injectable()
export class FindByCategory implements UseCase<CategoryEntity> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryEntity>,
  ) {}

  async execute(category: string): Promise<CategoryEntity> {
    const hasCategory = await this.categoryModel.findOne({ category });
    if (!hasCategory) throw new NotFoundException('Category not found');
    return hasCategory;
  }
}
