import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HackerNewsApiService } from './shared/services/api-hacker-news.service';
import { BaseApiService } from './shared/services/base-api.service';
import { SharedModule } from './shared/shared.module';
import { HackerNewsStoriesComponent } from './hacker-news-feed/hacker-news-stories-feed.component';
import { HackerNewsStoryItemComponent } from './hacker-news-item/hacker-news-story-item.component';
import { InfoParagraphComponent } from './info-paragraph/info-paragraph.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HackerNewsStoriesComponent,
    HackerNewsStoryItemComponent,
    InfoParagraphComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'hacker-news-stories-feed', component: HackerNewsStoriesComponent },
      { path: 'hacker-news-story-item', component: HackerNewsStoryItemComponent },
      { path: 'hacker-news-story-item/:itemId', component: HackerNewsStoryItemComponent },
    ])
  ],
  providers: [
    BaseApiService,
    HackerNewsApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
