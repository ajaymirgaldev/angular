import { Component } from '@angular/core';
import { RecordsService } from "./records.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//
export class AppComponent {
  title = 'ng Service';
  records = {};
  constructor(private recordsService:RecordsService) { }

  ngOnInit(){
    this.records = this.recordsService.getData();
  }
}
