import { Injectable } from '@nestjs/common';
import { CreatePlayerMapper } from '@/modules/players/mappers/create-player.mapper';
import { UseCase } from '@/base';
import { CreatePlayerDTO } from '../dtos/create-player.dto';
import { PlayerEntity } from '@/core/entities/players.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CreatePlayer implements UseCase<PlayerEntity> {
  private mapper: CreatePlayerMapper = new CreatePlayerMapper();

  constructor(
    @InjectModel('Player') private readonly playerModel: Model<PlayerEntity>,
  ) {}

  async execute(param: CreatePlayerDTO): Promise<PlayerEntity> {
    const hasPlayer = await this.playerModel.findOne({ email: param.email });
    if (hasPlayer) return this.update(param);
    return this.create(param);
  }

  private async create(param: CreatePlayerDTO): Promise<PlayerEntity> {
    const entity = this.mapper.mapFrom(param);
    const playerModel = new this.playerModel(entity);
    return playerModel.save();
  }

  private async update(param: CreatePlayerDTO): Promise<PlayerEntity> {
    const filter = { email: param.email };
    const set = { $set: param };
    const response = this.playerModel.findOneAndUpdate(filter, set);
    return response;
  }
}
