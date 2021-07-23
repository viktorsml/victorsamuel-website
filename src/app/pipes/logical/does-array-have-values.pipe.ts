import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doesArrayHaveValues',
})
export class DoesArrayHaveValuesPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): boolean {
    return Array.isArray(value) && value.length > 0;
  }
}
