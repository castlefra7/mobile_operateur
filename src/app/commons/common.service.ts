import { Injectable } from '@angular/core';

export interface HttpResponseBody {
  data?: [];
  status?: Status;
}

export interface Status {
  code: number;
  message: String;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
}
