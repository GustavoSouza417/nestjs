import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import { StringHelpers } from "src/helpers/string.helpers";

export function IsValidConfirmPassword(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidConfirmPassword",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (
            StringHelpers.isString(value) === false ||
            StringHelpers.isString((args.object as any).password) === false
          ) {
            return false;
          }

          const password: string = (args.object as any).password;
          const confirmPassword: string = value.trim();
          if(confirmPassword !== password)
            return false;

          return true;
        },

        defaultMessage() {
          return 'A senha de confirmação é inválida ou está diferente da senha';
        }
      }
    })
  }
}