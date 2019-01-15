import { Component } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpService';
  records = {};
  constructor(private myRecordsService:RecordsService){}

  //
  ngOnInit(){
    this.records = this.myRecordsService.getData();
  }
}
