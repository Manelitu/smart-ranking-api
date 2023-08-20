import { Injectable } from '@nestjs/common';
import { UseCase } from '@/base';
import { PlayerEntity } from '../../../core/entities/players.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DeletePlayer implements UseCase<PlayerEntity> {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<PlayerEntity>,
  ) {}
  async execute(id: string): Promise<any> {
    const handler = this.playerModel.findOneAndUpdate(
      { _id: id },
      { $set: { inactive: true } },
    );
    return handler.exec();
  }
}
