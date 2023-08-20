import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  CreatePlayer,
  ListPlayers,
  DeletePlayer,
  ListPlayerById,
} from './usecases';
import { PlayersController } from './players.controller';
import { playerSchema } from './repositories/mongoose/schemas/players.schema';

const mongooseConfig = { name: 'Player', schema: playerSchema };
@Module({
  imports: [MongooseModule.forFeature([mongooseConfig])],
  controllers: [PlayersController],
  providers: [CreatePlayer, ListPlayers, ListPlayerById, DeletePlayer],
})
export class PlayersModule {}
