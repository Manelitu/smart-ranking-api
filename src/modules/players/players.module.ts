import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersController } from './players.controller';
import { CreatePlayer } from './usecases/create-player';
import { ListUsers } from './usecases/list-players';
import { playerSchema } from './repositories/mongoose/schemas/players.schema';

const mongooseConfig = { name: 'Player', schema: playerSchema };
@Module({
  imports: [MongooseModule.forFeature([mongooseConfig])],
  controllers: [PlayersController],
  providers: [CreatePlayer, ListUsers],
})
export class PlayersModule {}
