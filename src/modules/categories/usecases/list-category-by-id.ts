import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UseCase } from '@/base';
import { CategoryEntity } from '@/core/entities/category.entity';

@Injectable()
export class FindByIdCategory implements UseCase<CategoryEntity> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryEntity>,
  ) {}

  async execute(id?: string): Promise<CategoryEntity> {
    const category = await this.categoryModel.findOne({ _id: id });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }
}
