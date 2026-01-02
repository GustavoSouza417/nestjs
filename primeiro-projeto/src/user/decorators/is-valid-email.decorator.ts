import { registerDecorator, ValidationOptions } from "class-validator";
import { StringHelpers } from "src/helpers/string.helpers";

export function IsValidEmail(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidEmail",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          if (StringHelpers.isString(value) === false)
            return false;

          const email: string = value.trim();
          const regex: RegExp = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|outlook\.com\.br|hotmail\.com)$/;
          if (!regex.test(email))
            return false;
          
          const [localPart, domainPart]: string[] = email.split('@');
          const localPartWithouDots: string = localPart.replace(/\./g, '');
          if (domainPart === 'gmail.com') {
            if (localPartWithouDots.length < 6 || localPartWithouDots.length > 30) {
              return false;
            }
          } else {
            if (localPartWithouDots.length < 1 ||localPartWithouDots.length > 64) {
              return false;
            }
          }
            
          return true;
        },

        defaultMessage() {
          return 'O email fornecido não é válido';
        }
      }
    })
  }
}