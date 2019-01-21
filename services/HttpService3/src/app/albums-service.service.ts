import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsServiceService {

  constructor(private http:HttpClient) { }
  
  //
  getAlbumData(){
	  return this.http.get("https://jsonplaceholder.typicode.com/albums")
	  .subscribe(data => {
		  console.log(data);
	  })
  }
}
