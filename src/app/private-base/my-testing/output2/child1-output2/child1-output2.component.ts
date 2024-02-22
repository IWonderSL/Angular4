import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1-output2',
  templateUrl: './child1-output2.component.html',
  styleUrl: './child1-output2.component.scss'
})
export class Child1Output2Component {
  @Output() messageEvent1 = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent1.emit('Message from Child1 to Parent!');
  }

}
