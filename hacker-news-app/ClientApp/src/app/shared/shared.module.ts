import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateFromUnixPipe } from './pipes/dateFromUnix';
import { NumberOfTimesPipe } from './pipes/numberOfTimes';
import { SearchFilterPipe } from './pipes/searchFilter';
import { HackerNewsApiService } from './services/api-hacker-news.service';
import { BaseApiService } from './services/base-api.service';


@NgModule({
    imports: [
    ],
    declarations: [
      NumberOfTimesPipe,
      DateFromUnixPipe,
      SearchFilterPipe
    ],
    providers: [
      BaseApiService,
      HackerNewsApiService,
    ],
    exports: [
      NumberOfTimesPipe,
      DateFromUnixPipe,
      SearchFilterPipe,
      FormsModule,
      HttpClientModule
    ],
})
export class SharedModule {}
