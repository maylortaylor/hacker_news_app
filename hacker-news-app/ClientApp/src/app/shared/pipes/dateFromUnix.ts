import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateFromUnix'})
export class DateFromUnix implements PipeTransform {
  transform(value: number) : any {
    var date = new Date(value*1000);
    return date.toLocaleDateString();
  }
}
