export const validator = {
  isObject: (element: any): boolean => {
    return (Object.entries(element).length === 0 && element.constructor === Object);
  },
  isValidString: (element: any): boolean => {
    return (typeof element === 'string' && element.length > 0);
  },
  isValidPositive: (element: any): boolean => {
    return (typeof element === 'number' && element >= 0);
  },
  isBoolean: (element: any): boolean => {
    return (typeof element === 'boolean') ? element : false;
  }
}
