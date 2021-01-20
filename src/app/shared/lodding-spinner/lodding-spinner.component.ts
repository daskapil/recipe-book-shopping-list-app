import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lodding-spinner',
  template: '<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./lodding-spinner.component.css']
})
export class LoddingSpinnerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
