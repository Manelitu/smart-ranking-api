import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Delete,
  Param,
  UsePipes,
} from '@nestjs/common';
import { CreatePlayerDTO, ListPlayersDTO } from './dtos';
import { PlayerEntity } from '@/core/entities/players.entity';
import {
  ListPlayerById,
  DeletePlayer,
  ListPlayers,
  CreatePlayer,
  UpdatePlayer,
} from './usecases';
import { PlayerValidationPipe } from './pipes/player.validation.pipe';

@Controller('api/v1/players')
export class PlayersController {
  constructor(
    private createPlayer: CreatePlayer,
    private updatePlayer: UpdatePlayer,
    private listPlayers: ListPlayers,
    private deletePlayer: DeletePlayer,
    private listPlayerById: ListPlayerById,
  ) {}

  @Post()
  @UsePipes(PlayerValidationPipe)
  async save(@Body() createPlayerDTO: CreatePlayerDTO): Promise<PlayerEntity> {
    return this.createPlayer.execute(createPlayerDTO);
  }

  @Post()
  @UsePipes(PlayerValidationPipe)
  async update(
    @Body() createPlayerDTO: CreatePlayerDTO,
    @Param('id') id: string,
  ): Promise<PlayerEntity> {
    return this.updatePlayer.execute(createPlayerDTO, id);
  }

  @Get()
  async list(@Query() listPlayersDTO: ListPlayersDTO): Promise<PlayerEntity[]> {
    return this.listPlayers.execute(listPlayersDTO);
  }

  @Get('/:id')
  @UsePipes(new PlayerValidationPipe())
  async listById(@Param('id') id: string): Promise<PlayerEntity> {
    return this.listPlayerById.execute(id);
  }

  @Delete('/:id')
  @UsePipes(new PlayerValidationPipe())
  async delete(@Param('id') id: string): Promise<PlayerEntity> {
    return this.deletePlayer.execute(id);
  }
}
