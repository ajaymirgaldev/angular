import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {

  constructor(private http:HttpClient) { }
  
  //
  getData(){
	  return this.http.get("https://jsonplaceholder.typicode.com/comments")
	  .subscribe(data => {
		  console.log(data);
	  });
	  
  }
}
