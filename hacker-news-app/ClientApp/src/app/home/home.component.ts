import { Component } from '@angular/core';
import { HackerNewsFeedType } from '../hacker-news-stories-feed/models/hacker-news-feed-type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public feedTypeEnum = HackerNewsFeedType;
  constructor(){}
}
