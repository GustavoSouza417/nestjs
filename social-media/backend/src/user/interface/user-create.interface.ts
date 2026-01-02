import { Sex } from "../enum/sex.enum";

export interface UserCreateInterface {
  name: string;
  birthdate: Date;
  sex: Sex;
  email: string;
  phone: string;
  password: string;
}