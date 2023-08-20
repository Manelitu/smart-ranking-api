import { Mapper } from '@/base/mapper';
import { CreatePlayerDTO } from '@/modules/players/dtos/create-player.dto';
import { PlayerEntity } from '@/core/entities/players.entity';
import { copyProperties } from '../../../helpers/copyProperties';

export class CreatePlayerMapper extends Mapper<CreatePlayerDTO, PlayerEntity> {
  mapFrom(param: CreatePlayerDTO): PlayerEntity {
    const playerEntity = new PlayerEntity();
    copyProperties(param, playerEntity);
    console.log(playerEntity);
    return playerEntity;
  }

  mapTo(param: PlayerEntity): CreatePlayerDTO {
    const { phone, email, name } = param;
    return {
      phone,
      email,
      name,
    };
  }
}
