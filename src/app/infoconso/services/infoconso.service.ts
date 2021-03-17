import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InfoConso } from '../infoconso';

@Injectable({
  providedIn: 'root'
})
export class InfoconsoService {

  infoConso: InfoConso[] = [
    { resteCred: "1000 Ar", forfaits : [
      { name : "Faceboobaka", applications : [
        { id: 1, name : "Facebook", units: [
          { id: 1, name : "Mo" }
        ], amount : 1000 }
      ] }
    ] }
  ];

  constructor() { }

  findByCustomerId(customerId: number) : Observable<InfoConso[]> {
    return of(this.infoConso);
  } 
}
