import { IsString, IsOptional } from 'class-validator';

export class ListPlayersDTO {
  @IsOptional()
  @IsString()
  page: number;

  @IsOptional()
  @IsString()
  limit: string;
}
