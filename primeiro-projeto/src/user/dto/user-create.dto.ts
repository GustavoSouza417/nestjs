import { IsNotEmpty, IsString, Length, IsEmail, IsDate, Matches, IsEnum, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { Sex } from '../enum/sex.enum';
import { IsValidEmail, IsValidPhone, IsValidConfirmPassword } from '../decorators';

export class UserCreateDto {
  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]{1,150}$/u, {
    message: 'O nome deve conter apenas letras do alfabeto português e espaços, com no máximo 150 caracteres'
  })
  public name: string;


  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  public birthdate: Date;


  @IsNotEmpty()
  @IsString()
  @IsIn(Intl.supportedValuesOf('timeZone'))
  public timezone: string;


  @IsEnum(Sex)
  public sex: Sex;


  @IsValidEmail()
  public email: string;


  @IsValidPhone()
  public phone: string;


  @IsNotEmpty()
  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/, {
    message: 'A senha deve ter 8 - 25 caracteres, pelo menos uma letra minúscula, uma maiúscula, um número e um caractere especial'
  })
  public password: string;


  @IsValidConfirmPassword()
  public confirmPassword: string;
}