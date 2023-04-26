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
import { HackerNewsStoriesFeedComponent } from './hacker-news-stories-feed/hacker-news-stories-feed.component';
import { HackerNewsStoryItemComponent } from './hacker-news-story-item/hacker-news-story-item.component';
import { InfoParagraphComponent } from './info-paragraph/info-paragraph.component';
import { TableLoadingComponent } from './table-loading/table-loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HackerNewsStoriesFeedComponent,
    HackerNewsStoryItemComponent,
    InfoParagraphComponent,
    TableLoadingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    SharedModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'hacker-news-stories-feed', component: HackerNewsStoriesFeedComponent },
      { path: 'hacker-news-story-item', component: HackerNewsStoryItemComponent },
      { path: 'hacker-news-story-item/:itemId', component: HackerNewsStoryItemComponent },
    ])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
