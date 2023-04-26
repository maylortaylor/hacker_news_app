import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFromUnix'})
export class DateFromUnixPipe implements PipeTransform {
  transform(value: number) : any {
    if (Number.isNaN(value)) return null;

    var date = new Date(value*1000);
    return date.toLocaleDateString();
  }
}
