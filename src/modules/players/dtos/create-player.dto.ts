import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsPhoneNumber,
  Length,
} from 'class-validator';

export class CreatePlayerDTO {
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  @Length(11)
  @IsString()
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  name: string;
}
