import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnChanges, OnInit, OnDestroy {
  title = 'Data Binding.';
  firstName = "";
  lastName = "";

  //life cycle hooks//

  ngOnInit(){
      console.log("ngOnInit:");
  }

  ngOnChanges(changes: SimpleChanges) {
      console.log("ngOnChanges:");
  }

  //
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

  //
  viewToModelUpdate(){
    console.log("viewToModelUpdate:");
  }

  //
  onSubmit (myForm:NgForm){
    console.log(myForm.value);  // { first: '', last: '' }
    console.log(myForm.valid);  // false

  }
}
