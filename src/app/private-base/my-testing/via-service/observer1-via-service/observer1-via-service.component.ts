import { Component, OnInit } from '@angular/core';
import { ViaServiceService } from '../via-service.service';

@Component({
  selector: 'app-observer1-via-service',
  templateUrl: './observer1-via-service.component.html',
  styleUrl: './observer1-via-service.component.scss',
})
export class Observer1ViaServiceComponent implements OnInit {
  message: string = 'observer 1 default';

  constructor(private viaServiceService: ViaServiceService) {}

  ngOnInit(): void {
    this.viaServiceService.currentData.subscribe(
      (data) => (this.message = data)
    );
  }
}
