import { Module } from '@nestjs/common';
import { PlayersModule } from './modules/players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    PlayersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
