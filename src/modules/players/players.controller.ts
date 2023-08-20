import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player.dto';
import { CreatePlayer } from './usecases/create-player';
import { ListUsersDTO } from './dtos/list-users.dto';
import { ListUsers } from './usecases/list-users';

@Controller('api/v1/players')
export class PlayersController {
  constructor(
    private createPlayer: CreatePlayer,
    private listUsers: ListUsers,
  ) {}

  @Post()
  async saveAndUpdate(@Body() createPlayerDTO: CreatePlayerDTO) {
    const response = this.createPlayer.execute(createPlayerDTO);
    return JSON.stringify(response);
  }

  async list(@Body() listUsersDTO: ListUsersDTO) {
    return this.listUsers.execute(listUsersDTO);
  }
}
