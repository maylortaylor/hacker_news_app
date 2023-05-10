import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HackerNewsApiService } from 'src/app/shared/services/api-hacker-news.service';
import { HackerNewsStory } from '../hacker-news-stories-feed/models/hacker-news-story.model';
import { ResponseModel } from '../shared/models/response';

@Component({
  selector: 'app-hacker-news-story-item',
  templateUrl: './hacker-news-story-item.component.html'
})
export class HackerNewsStoryItemComponent implements OnInit {
  public story: HackerNewsStory;
  public isLoading: boolean = false;
  public itemId: string;
  public randomItem: boolean = false;

  constructor(
      private route: ActivatedRoute,
      private hackerNewsApi: HackerNewsApiService
    ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.itemId = params['itemId'];

      if (this.itemId) {
        this.getHackerNewsSingleItem(+this.itemId);
        return;
      }
    });

    this.getHackerNewsSingleItem(this.randomNumberBetween(8000,80000));
  }

  getHackerNewsSingleItem(itemId: number) {
    this.isLoading = true;

    this.hackerNewsApi.getStoryItem(itemId).subscribe(
      (response: ResponseModel) => {
        console.log("Single Story", response);
        this.isLoading = false;
        if (response.succeeded || response.errors === null) {
          this.story = response.data;
        }
        }, (error) => {
        console.error(error);
      });
  }

  private randomNumberBetween(min: number, max: number) {
    this.randomItem = true;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
