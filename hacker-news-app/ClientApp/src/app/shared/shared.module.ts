import { NgModule } from '@angular/core';
import { DateFromUnixPipe } from './pipes/dateFromUnix';
import { NumberOfTimesPipe } from './pipes/numberOfTimes';
import { SearchFilterPipe } from './pipes/searchFilter';


@NgModule({
    declarations: [
      NumberOfTimesPipe,
      DateFromUnixPipe,
      SearchFilterPipe
    ],
    exports: [
      NumberOfTimesPipe,
      DateFromUnixPipe,
      SearchFilterPipe
    ],
})
export class SharedModule {}
