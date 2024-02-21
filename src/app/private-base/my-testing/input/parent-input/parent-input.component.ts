import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrl: './parent-input.component.scss'
})
export class ParentInputComponent {
  currentMessage = 'Initial Message';

  sendMessage() {
    this.currentMessage = 'Hello from Parent!';
  }
}
