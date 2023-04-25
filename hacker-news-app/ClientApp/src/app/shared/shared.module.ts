import { NgModule } from '@angular/core';
import { DateFromUnix } from './pipes/dateFromUnix';
import { NumberOfTimes } from './pipes/numberOfTimes';
import { SearchFilter } from './pipes/searchFilter';


@NgModule({
    declarations: [
        NumberOfTimes,
        DateFromUnix,
        SearchFilter
    ],
    exports: [
      NumberOfTimes,
      DateFromUnix,
      SearchFilter
    ],
})
export class SharedModule {}
