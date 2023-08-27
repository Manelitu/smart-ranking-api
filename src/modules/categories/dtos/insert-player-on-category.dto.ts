import { IsNotEmpty, IsString } from 'class-validator';

export class InsertPlayerOnCategoryDTO {
  @IsNotEmpty()
  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  playerId: string;
}
