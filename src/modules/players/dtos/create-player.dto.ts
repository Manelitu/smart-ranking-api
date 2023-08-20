import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreatePlayerDTO {
  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
