import { Module } from '@nestjs/common';
import { PlayersController } from './players.controller';
import { CreatePlayer } from './usecases/create-player';

@Module({
  controllers: [PlayersController],
  providers: [CreatePlayer],
})
export class PlayersModule {}
