import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(itemsToSearch: any, args?: any) : any {
    if (!itemsToSearch) return [];
    if (!args) return itemsToSearch;

    args = args.toLowerCase();

    return itemsToSearch.filter((item: any) => {
      return JSON.stringify(item)
        .toLowerCase()
        .includes(args);
    });
  }
}
