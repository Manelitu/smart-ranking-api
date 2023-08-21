import {
  IsEmail,
  IsString,
  IsPhoneNumber,
  Length,
  IsOptional,
} from 'class-validator';

export class UpdatePlayerDTO {
  @IsOptional()
  @IsPhoneNumber('BR')
  @Length(11)
  @IsString()
  phone: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsOptional()
  @IsString()
  name: string;
}
