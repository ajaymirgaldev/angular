import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }
  
  //
  getData(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
    
    //operator to handle asyn tasks//
    .subscribe(data => {
      console.log(data);
    })
  }
}
