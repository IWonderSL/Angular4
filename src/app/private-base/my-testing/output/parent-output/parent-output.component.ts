import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-output',
  templateUrl: './parent-output.component.html',
  styleUrl: './parent-output.component.scss'
})
export class ParentOutputComponent {
  message = '';

  receiveMessage(event: string) {
    this.message = event;
  }
}
