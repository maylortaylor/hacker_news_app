class PagedResponse {
  pageNumber: number;
  pageSize: number;
  firstPage: string;
  lastPage: string;
  totalPages: number;
  totalRecords: number;
  nextPage: string;
  previousPage: string;
}
export class ResponseModel extends PagedResponse {
  data: any;
  succeeded: boolean;
  errors: string[];
  message: string;
}
