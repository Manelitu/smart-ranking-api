import { Injectable } from '@nestjs/common';
import { CreatePlayerDTO } from '../dtos/create-player.dto';
import { PlayerEntity } from '../entities/players.entity';
import { CreatePlayerMapper } from '../../../helpers/mappers/players.mapper';
import { UseCase } from '../../../base/usecases';

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
