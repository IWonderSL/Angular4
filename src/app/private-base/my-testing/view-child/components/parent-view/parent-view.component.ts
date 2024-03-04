import { Component, ViewChild } from '@angular/core';
import { ChildViewComponent } from '../child-view/child-view.component';

@Component({
  selector: 'app-parent-view',
  templateUrl: './parent-view.component.html',
  styleUrl: './parent-view.component.scss'
})
export class ParentViewComponent {
  @ViewChild(ChildViewComponent) child!: ChildViewComponent;
  message: string = '';

  receiveMessage() {
    if (this.child) {
      this.message = this.child.sendMessage();
    }
  }

}
