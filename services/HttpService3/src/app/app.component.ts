import { Component } from '@angular/core';
import { AlbumsServiceService } from './albums-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpService3';
   albums = {};
  
  constructor(private albumHttp:AlbumsServiceService) { }
  
  //
  ngOnInit(){
	this.albums = this.albumHttp.getAlbumData();
	console.log(this.albums);
  }
}
