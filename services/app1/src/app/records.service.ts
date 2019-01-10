import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor() { }

  //
  getData(){
    return [
      "Ajay Mirgal",
      "Accenture solution pvt ltd",
      "innovid"
    ]
  }
}
