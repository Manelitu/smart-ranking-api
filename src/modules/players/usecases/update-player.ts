import { Injectable } from '@nestjs/common';
import { UseCase } from '@/base';
import { CreatePlayerDTO } from '../dtos/create-player.dto';
import { PlayerEntity } from '@/core/entities/players.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UpdatePlayer implements UseCase<PlayerEntity> {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<PlayerEntity>,
  ) {}

  async execute(param: CreatePlayerDTO, id: string): Promise<PlayerEntity> {
    return this.update(param, id);
  }

  private async update(
    param: CreatePlayerDTO,
    id: string,
  ): Promise<PlayerEntity> {
    const filter = { _id: id };
    const set = { $set: param };
    const response = this.playerModel.findOneAndUpdate(filter, set);
    return response;
  }
}
