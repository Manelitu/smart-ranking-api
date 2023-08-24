import { Module } from '@nestjs/common';
import { PlayersModule } from './modules/players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { CategoriesController } from './modules/categories/categories.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    PlayersModule,
    CategoriesModule,
  ],
  controllers: [CategoriesController],
  providers: [],
})
export class AppModule {}
