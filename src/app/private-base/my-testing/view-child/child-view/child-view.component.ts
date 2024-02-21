import { Component } from '@angular/core';

@Component({
  selector: 'app-child-view',
  templateUrl: './child-view.component.html',
  styleUrl: './child-view.component.scss'
})
export class ChildViewComponent {
  message = 'Initial message from Child';

  sendMessage() {
    return 'Message from Child to Parent!';
  }
}
