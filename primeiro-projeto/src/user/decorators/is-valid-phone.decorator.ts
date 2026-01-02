import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";
import { StringHelpers } from "src/helpers/string.helpers";

export function IsValidPhone(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isValidPhone",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (StringHelpers.isString(value) === false)
            return false;

          const phone: string = value.trim();
          const regexOnlyNumbers: RegExp = /^\d{11}$/;
          if (!regexOnlyNumbers.test(phone))
            return false;
          
          const validBrazilDDDs: string[] = [
            '11','12','13','14','15','16','17','18','19',
            '21','22','24','27','28',
            '31','32','33','34','35','37','38',
            '41','42','43','44','45','46',
            '47','48','49',
            '51','53','54','55',
            '61','62','63','64','65','66','67','68','69',
            '71','73','74','75','77','79',
            '81','82','83','84','85','86','87','88','89',
            '91','92','93','94','95','96','97','98','99'
          ];
          const ddd: string = phone.slice(0, 2);
          if (!validBrazilDDDs.includes(ddd))
            return false;

          if(phone[2] !== '9')
            return false;

          const regexAllDigitsEqual: RegExp = /^(\d)\1{10}$/;
          if (regexAllDigitsEqual.test(phone))
            return false;

          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return 'O telefone fornecido não é válido';
        }
      }
    })
  }
}