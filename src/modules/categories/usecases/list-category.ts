import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UseCase } from '@/base';
import { CategoryEntity } from '@/core/entities';

@Injectable()
export class ListCategory implements UseCase<CategoryEntity> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryEntity>,
  ) {}

  async execute(): Promise<CategoryEntity[]> {
    return this.categoryModel.find().populate('players').exec();
  }
}
