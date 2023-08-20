import { Injectable } from '@nestjs/common';
import { CreatePlayerMapper } from '@/modules/players/mappers/create-player.mapper';
import { UseCase } from '@/base';
import { CreatePlayerDTO } from '../dtos/create-player.dto';
import { PlayerEntity } from '@/modules/entities/players.entity';

@Injectable()
export class CreatePlayer implements UseCase<PlayerEntity> {
  private mapper: CreatePlayerMapper;

  constructor() {
    this.mapper = new CreatePlayerMapper();
  }

  execute(createPlayerDTO: CreatePlayerDTO): PlayerEntity {
    const entity = this.mapper.mapFrom(createPlayerDTO);
    return entity;
  }
}
