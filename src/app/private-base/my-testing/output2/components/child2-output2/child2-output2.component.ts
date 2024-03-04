import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2-output2',
  templateUrl: './child2-output2.component.html',
  styleUrl: './child2-output2.component.scss'
})
export class Child2Output2Component {
  @Output() messageEvent2 = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent2.emit('Message from Child2 to Parent!');
  }

}
