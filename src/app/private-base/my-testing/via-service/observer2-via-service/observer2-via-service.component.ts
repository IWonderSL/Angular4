import { Component, OnInit } from '@angular/core';
import { ViaServiceService } from '../via-service.service';

@Component({
  selector: 'app-observer2-via-service',
  templateUrl: './observer2-via-service.component.html',
  styleUrl: './observer2-via-service.component.scss',
})
export class Observer2ViaServiceComponent implements OnInit {
  message: string = 'observer 2 default';

  constructor(private viaServiceService: ViaServiceService) {}

  ngOnInit(): void {
    this.viaServiceService.currentData.subscribe(
      (data) => (this.message = data)
    );
  }

  newMessage() {
    this.viaServiceService.updateData("Hello, Updated from observer 2")
  }
}
