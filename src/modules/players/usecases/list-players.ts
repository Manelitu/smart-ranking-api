import { Injectable } from '@nestjs/common';
import { UseCase } from '@/base';
import { ListPlayersDTO } from '../dtos';
import { PlayerEntity } from '../../entities/players.entity';

@Injectable()
export class ListUsers implements UseCase<PlayerEntity> {
  execute(params: ListPlayersDTO): PlayerEntity[] | any[] {
    return [params];
  }
}
