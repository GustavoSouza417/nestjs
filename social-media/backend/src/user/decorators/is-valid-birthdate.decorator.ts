import { registerDecorator, ValidationOptions } from "class-validator";
import { StringHelpers } from "src/helpers/string.helpers";

export function IsValidBirthdate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidBirthdate",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          // if (StringHelpers.isString(value) === false)
          //   return false;

          // const date: Date = new Date(value);
          // const now = new Date();
            
          return true;
        },

        defaultMessage() {
          return 'A data de nascimento fornecida não é válida';
        }
      }
    })
  }
}