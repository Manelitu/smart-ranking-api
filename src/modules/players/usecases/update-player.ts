import { Injectable, NotFoundException } from '@nestjs/common';
import { UseCase } from '@/base';
import { UpdatePlayerDTO } from '../dtos';
import { PlayerEntity } from '@/core/entities/players.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UpdatePlayer implements UseCase<PlayerEntity> {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<PlayerEntity>,
  ) {}

  async execute(param: UpdatePlayerDTO, id: string): Promise<PlayerEntity> {
    const existPlayer = await this.playerModel.findOne({ _id: id });
    if (!existPlayer) throw new NotFoundException('Player not found');
    return this.update(param, id);
  }

  private async update(
    param: UpdatePlayerDTO,
    id: string,
  ): Promise<PlayerEntity> {
    const filter = { _id: id };
    const set = { $set: param };
    const response = this.playerModel.findOneAndUpdate(filter, set);
    return response;
  }
}
