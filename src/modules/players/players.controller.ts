import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Delete,
  Param,
} from '@nestjs/common';
import { CreatePlayerDTO, ListPlayersDTO } from './dtos';
import { PlayerEntity } from '../../core/entities/players.entity';
import {
  ListPlayerById,
  DeletePlayer,
  ListPlayers,
  CreatePlayer,
} from './usecases';

@Controller('api/v1/players')
export class PlayersController {
  constructor(
    private createPlayer: CreatePlayer,
    private listPlayers: ListPlayers,
    private deletePlayer: DeletePlayer,
    private listPlayerById: ListPlayerById,
  ) {}

  @Post()
  async saveAndUpdate(
    @Body() createPlayerDTO: CreatePlayerDTO,
  ): Promise<PlayerEntity> {
    return this.createPlayer.execute(createPlayerDTO);
  }

  @Get()
  async list(@Query() listPlayersDTO: ListPlayersDTO): Promise<PlayerEntity[]> {
    return this.listPlayers.execute(listPlayersDTO);
  }

  @Get('/:id')
  async listById(@Param('id') id: string): Promise<PlayerEntity> {
    return this.listPlayerById.execute(id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<PlayerEntity> {
    return this.deletePlayer.execute(id);
  }
}
