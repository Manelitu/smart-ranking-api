import { Injectable } from '@nestjs/common';
import { UseCase } from '@/base';
import { ListPlayersDTO } from '../dtos';
import { PlayerEntity } from '../../../core/entities/players.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ListPlayers implements UseCase<PlayerEntity> {
  constructor(
    @InjectModel('Player') private readonly playerModel: Model<PlayerEntity>,
  ) {}
  async execute(params: ListPlayersDTO): Promise<PlayerEntity[]> {
    const { limit, page } = params;

    let query = this.playerModel.find();

    if (limit && page) {
      const skipCount = Number(limit) * page;
      query = query.limit(Number(limit)).skip(skipCount);
    }

    const players = await query.exec();
    return players;
  }
}
