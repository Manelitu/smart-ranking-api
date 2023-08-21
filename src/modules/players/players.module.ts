import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  CreatePlayer,
  ListPlayers,
  DeletePlayer,
  ListPlayerById,
  UpdatePlayer,
} from './usecases';
import { PlayersController } from './players.controller';
import { playerSchema } from './repositories/mongoose/schemas/players.schema';

const mongooseConfig = { name: 'Player', schema: playerSchema };
@Module({
  imports: [MongooseModule.forFeature([mongooseConfig])],
  controllers: [PlayersController],
  providers: [
    CreatePlayer,
    ListPlayers,
    ListPlayerById,
    DeletePlayer,
    UpdatePlayer,
  ],
})
export class PlayersModule {}
