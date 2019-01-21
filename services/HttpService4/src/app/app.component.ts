import { Component } from '@angular/core';
import { CommentsServiceService } from './comments-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'HttpService4';
	commentsData = {};
	
	//
	constructor(private httpService:CommentsServiceService){}
	
	//
	ngOnInit(){
		this.commentsData = this.httpService.getData();
	}
}
