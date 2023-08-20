import { Injectable } from '@nestjs/common';
import { UseCase } from '@/base';
import { ListUsersDTO } from '../dtos';
import { PlayerEntity } from '../../entities/players.entity';

@Injectable()
export class ListUsers implements UseCase<PlayerEntity> {
  execute(params: ListUsersDTO): PlayerEntity[] | any[] {
    return [params];
  }
}
