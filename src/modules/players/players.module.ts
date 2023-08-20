import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { CreatePlayer } from './usecases/create-player';
import { ListUsers } from './usecases/list-users';

@Module({
  controllers: [PlayersController],
  providers: [CreatePlayer, ListUsers],
})
export class PlayersModule {}
