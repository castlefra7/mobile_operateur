import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Application } from '../application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsService {

  applications : Application[] = [
    { id : 1, name : "Facebook", units : [ { id: 1, name : "Mo" } ] },
    { id : 2, name : "Instagram", units : [ { id: 1, name : "Mo" } ] },
    { id : 3, name : "Internet", units : [ { id: 1, name : "Mo" } ] },
  ];

  constructor() { }

  findAll() : Observable<Application[]> {
    return of(this.applications);
  }
}
