import { Injectable } from '@angular/core';
import { Balances } from '../infoconso/services/infoconso.service';

export interface HttpResponseBodyBalance {
  data?: [];
  status?: Status;
}


export interface Message {
  message: string;
  customer_id: number;
  date: string;
}

export interface HttpResponseBody {
  data?: Message[];
  status?: Status;
}

export interface Status {
  code: number;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
}
