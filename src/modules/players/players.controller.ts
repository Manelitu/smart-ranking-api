import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDTO } from './dtos/create-player.dto';
import { CreatePlayer } from './usecases/create-player';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private createPlayer: CreatePlayer) {}

  @Post()
  async saveAndUpdate(@Body() createPlayerDTO: CreatePlayerDTO) {
    const response = this.createPlayer.execute(createPlayerDTO);
    return JSON.stringify(response);
  }
}
