import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpService5';
  profiles = {};
  constructor(private profileSevice:ProfileService) { }
  
  ngOnInit(){
	 this.profiles = this.profileSevice.getData();
	 console.log(this.profiles);
  }
  
}
