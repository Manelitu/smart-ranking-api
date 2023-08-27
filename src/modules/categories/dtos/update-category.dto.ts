import { ArrayMinSize, IsArray, IsOptional, IsString } from 'class-validator';
import { Event } from '@/core/entities/category.entity';

export class UpdateCategoryDTO {
  @IsOptional()
  @IsString()
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  events: Event[];
}
