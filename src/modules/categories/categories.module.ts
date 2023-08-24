import { Module } from '@nestjs/common';
import { CreateCategory } from './usecases';

@Module({
  providers: [CreateCategory],
})
export class CategoriesModule {}
