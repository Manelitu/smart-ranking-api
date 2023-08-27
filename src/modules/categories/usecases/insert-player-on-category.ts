import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { UseCase } from '@/base';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryEntity, PlayerEntity } from '@/core/entities';
import { InsertPlayerOnCategoryDTO } from '../dtos';

@Injectable()
export class InsertPlayerOnCategory implements UseCase<CategoryEntity> {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<CategoryEntity>,
    @InjectModel('Player')
    private readonly playerModel: Model<PlayerEntity>,
  ) {}

  async execute(params: InsertPlayerOnCategoryDTO): Promise<CategoryEntity> {
    const { category, playerId } = params;

    const existCategory = await this.categoryModel.findOne({ category }).exec();

    if (!existCategory) throw new NotFoundException('Category doesnt exists');

    const existPlayer = await this.playerModel.findById(playerId).exec();

    if (!existPlayer) throw new NotFoundException('Player doesnt exists');

    const playerExistsInCategory = await this.categoryModel
      .findOne({ category })
      .where('players')
      .in([playerId]);

    if (playerExistsInCategory) {
      throw new ConflictException('Player already exists on a category');
    }

    existCategory.players.push(existPlayer);

    return this.categoryModel.findByIdAndUpdate(
      { _id: existCategory._id },
      { $set: existCategory },
    );
  }
}
