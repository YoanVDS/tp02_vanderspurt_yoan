import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {
  
  constructor() { }

  @Input() lastName: string = "";
  @Input() firstName: string = "";
  @Input() address: string = "";
  @Input() zip: string = "";
  @Input() city: string = "";
  @Input() tel: string = "";
  @Input() email: string = "";
  @Input() gender: string = "";
  @Input() password: string = "";
  @Input() login: string = "";
  @Input() country: string = "";

  ngOnInit(): void {
  }

}
