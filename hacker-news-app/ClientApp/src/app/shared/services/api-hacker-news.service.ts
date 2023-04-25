import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PaginationOptions } from "../models/paginationOptions";
import { ResponseModel } from "../models/response";
import { BaseApiService } from "./base-api.service";

@Injectable()
export class HackerNewsApiService extends BaseApiService {
  public getStoryItem(itemId: number): Observable<ResponseModel> {
    const url: string = `api/hackernews/${itemId}`;
    return this.get<ResponseModel>(url);
  }

  public getTopStories(paginationOptions: PaginationOptions): Observable<ResponseModel> {
    const url: string = `api/hackernews/topstories?pageNumber=${paginationOptions.page}&pageSize=${paginationOptions.size}`;
    return this.get<ResponseModel>(url);
  }

  public getNewStories<T>(paginationOptions: PaginationOptions): Observable<ResponseModel> {
    const url: string = `api/hackernews/newstories?pageNumber=${paginationOptions.page}&pageSize=${paginationOptions.size}`;
    return this.get<ResponseModel>(url);
  }

  public getBestStories<T>(paginationOptions: PaginationOptions): Observable<ResponseModel> {
    const url: string = `api/hackernews/beststories?pageNumber=${paginationOptions.page}&pageSize=${paginationOptions.size}`;
    return this.get<ResponseModel>(url);
  }
}
