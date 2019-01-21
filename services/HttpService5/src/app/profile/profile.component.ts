import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	
	profileServiceData = {};
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
	  this.profileServiceData = this.profileService.getData();
	  console.log(this.profileServiceData);
  }

}
