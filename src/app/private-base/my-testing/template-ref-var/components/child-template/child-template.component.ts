import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-template',
  templateUrl: './child-template.component.html',
  styleUrl: './child-template.component.scss'
})
export class ChildTemplateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: string = 'This data was from child component.';
  data2: string = 'hello from child component.';
}
