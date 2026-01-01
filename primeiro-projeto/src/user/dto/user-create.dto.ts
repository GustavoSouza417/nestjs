import { IsNotEmpty, IsString, Length, IsEmail, IsDate, Matches, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { Sex } from '../enum/sex.enum';

export class UserCreateDto {
  @IsNotEmpty()
  @IsString()
  @Length(1, 150)
  public name: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  public birthdate: Date;

  public timezone: string;

  @IsEnum(Sex)
  public sex: Sex;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @Length(11, 79)
  public email: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^\d{11}$/)
  public phone: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/, {
    message: 'A senha deve ter 8 - 25 caracteres, pelo menos uma letra minúscula, uma maiúscula, um número e um caractere especial'
  })
  public password: string;
}