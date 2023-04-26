import { Component, Input, OnInit } from '@angular/core';
import { PaginationOptions } from 'src/app/shared/models/paginationOptions';
import { HackerNewsApiService } from 'src/app/shared/services/api-hacker-news.service';
import { ResponseModel } from '../shared/models/response';
import { HackerNewsFeedType } from './models/hacker-news-feed-type.enum';
import { HackerNewsStory } from './models/hacker-news-story.model';

@Component({
  selector: 'app-hacker-news-feed',
  templateUrl: './hacker-news-stories-feed.component.html'
})
export class HackerNewsStoriesFeedComponent implements OnInit {
  public stories: HackerNewsStory[] = [];
  public isLoading: boolean = false;
  public totalRecords: number;
  public searchText: string;
  public paginationOptions: PaginationOptions = new PaginationOptions();
  public newsFeedEnumValue: HackerNewsFeedType;
  @Input() public set newsFeedType(value: HackerNewsFeedType) {
    this.newsFeedEnumValue = value;
  };
  public newsFeedTypeName(type: HackerNewsFeedType): string {
    if (type === undefined) type = HackerNewsFeedType.BEST;
    return HackerNewsFeedType[type];
  }
  public get paginationNumbers(): number[] {
    const limit: number = Math.ceil(this.totalRecords / this.paginationOptions.size);
    if (limit) {
      return Array.from({ length: limit }, (_, i): number => i + 1);
    }
    return [];
  }


  constructor(
      private hackerNewsApi: HackerNewsApiService
    ) {
  }

  ngOnInit(): void {
    this.getHackerNewsFeedData(this.newsFeedEnumValue);
  }

  getHackerNewsFeedData(newsFeedType: HackerNewsFeedType = HackerNewsFeedType.BEST): void {
    this.isLoading = true;

    switch (newsFeedType) {
      case HackerNewsFeedType.TOP:
        this.hackerNewsApi.getTopStories(this.paginationOptions)
          .subscribe(this.captureResponse);
        break;
      case HackerNewsFeedType.BEST:
        this.hackerNewsApi.getBestStories(this.paginationOptions)
          .subscribe(this.captureResponse);
        break;
      case HackerNewsFeedType.NEW:
        this.hackerNewsApi.getNewStories(this.paginationOptions)
          .subscribe(this.captureResponse);
        break;
    }
  }

  private captureResponse = (response: ResponseModel): void => {
    this.isLoading = false;
    this.totalRecords = response.totalRecords;
    if (response.succeeded || response.errors === null) {
      this.stories = response.data;
      console.log("Stories:", this.stories);
    }
    if (response.errors !== null) {
      console.log("Errors:", response.errors);
    }
  }

  previousPage(): void {
    console.log("previous page");
    this.paginationOptions.page--;
    this.getHackerNewsFeedData(this.newsFeedEnumValue);
  }

  nextPage(): void {
    console.log("next page");
    this.paginationOptions.page++;
    this.getHackerNewsFeedData(this.newsFeedEnumValue);
  }

  to(page: number): void {
    console.log(`go to page ${page}`);
    this.paginationOptions.page = page;
    this.getHackerNewsFeedData(this.newsFeedEnumValue);
  }
}
