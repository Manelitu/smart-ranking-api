import { IsNumber, IsOptional } from 'class-validator';

export class ListUsersDTO {
  @IsOptional()
  @IsNumber()
  page: number;

  @IsOptional()
  @IsNumber()
  limit: string;
}
