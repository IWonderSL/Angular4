import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-output2',
  templateUrl: './parent-output2.component.html',
  styleUrl: './parent-output2.component.scss'
})
export class ParentOutput2Component {
  message1 = 'default message';
  message2 = 'default message';

  receiveMessage1(event: string) {
    this.message1 = event;
  }

  receiveMessage2(event: string) {
    this.message2 = event;
  }

}
