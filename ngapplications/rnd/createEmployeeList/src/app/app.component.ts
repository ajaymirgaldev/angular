import { Component } from '@angular/core';

import { CreateComponent } from './view/create.component';
import { HomeComponent } from './view/home.component';
import { ListComponent } from './view/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Create Employee List';
}
