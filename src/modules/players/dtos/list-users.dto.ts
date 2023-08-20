import { IsString, IsOptional } from 'class-validator';

export class ListUsersDTO {
  @IsOptional()
  @IsString()
  page: number;

  @IsOptional()
  @IsString()
  limit: string;
}
