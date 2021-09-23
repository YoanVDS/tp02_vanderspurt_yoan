import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  lastname: string = "toto";
  valid: boolean = true;

  onSubmit () {
      this.valid = !this.valid;
      console.log("Click enclenché");
  }

  ngOnInit(): void {
  }

}
