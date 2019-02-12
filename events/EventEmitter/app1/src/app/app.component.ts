import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Emitter';

  //
  constructor(){

  }

  @Output() emitEvent : EventEmitter<any> = new EventEmitter();

  dispatchEmitEvent(e){
    console.log("call me");
    this.emitEvent.emit("Emit event dispatched");
  }
}

//https://www.youtube.com/watch?v=1nRoqwn33W0