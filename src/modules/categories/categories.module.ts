import { Module } from '@nestjs/common';
import {
  CreateCategory,
  FindByCategory,
  ListCategory,
  UpdateCategory,
} from './usecases';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchema } from './repositories/mongoose/schemas/categories.schema';
import { InsertPlayerOnCategory } from './usecases/insert-player-on-category';
import { playerSchema } from '../players/repositories/mongoose/schemas/players.schema';

const mongooseConfig = [
  { name: 'Category', schema: categorySchema },
  { name: 'Player', schema: playerSchema },
];

@Module({
  imports: [MongooseModule.forFeature([...mongooseConfig])],
  providers: [
    CreateCategory,
    ListCategory,
    FindByCategory,
    UpdateCategory,
    InsertPlayerOnCategory,
  ],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
