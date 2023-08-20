import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player.dto';
import { CreatePlayer } from './usecases/create-player';
import { ListPlayersDTO } from './dtos/list-players.dto';
import { ListUsers } from './usecases/list-players';

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

  @Get()
  async list(@Query() listPlayersDTO: ListPlayersDTO) {
    return this.listUsers.execute(listPlayersDTO);
  }
}
