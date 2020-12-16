import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-custom-component',
  templateUrl: './my-custom-component.component.html',
  styleUrls: ['./my-custom-component.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class MyCustomComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
