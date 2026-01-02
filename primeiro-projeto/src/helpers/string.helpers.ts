export abstract class StringHelpers {
  public static isString(value: any): boolean {
    if (
      value === undefined ||
      value === null ||
      typeof value !== 'string' ||
      value.trim() === ''
    ) {
      return false;
    }

    return true;
  }
}