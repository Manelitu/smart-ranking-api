import { Module } from '@nestjs/common';
import { CreateCategory } from './usecases';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categorySchema } from './repositories/mongoose/schemas/categories.schema';

const mongooseConfig = { name: 'Category', schema: categorySchema };

@Module({
  imports: [MongooseModule.forFeature([mongooseConfig])],
  providers: [CreateCategory],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
