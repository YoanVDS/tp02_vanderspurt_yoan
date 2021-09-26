import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  lastName: string = "";
  firstName: string = "";
  address: string = "";
  zip: string = "";
  city: string = "";
  tel: string = "";
  email: string = "";
  gender: string = "";
  password: string = "";
  login: string = "";
  country: string = "";
  validated: boolean = false;

  onSubmit () {
    var regexLength = new RegExp("(?=.{8,})");
    var regexMinMaj = new RegExp("^(?=.*[a-z])(?=.*[A-Z])");
    var regexNumber = new RegExp("(?=.*[0-9])");
    if(!regexLength.test(this.password)){
      alert("Merci de saisir un mot de passe de plus de 8 caractères.");
      return;
    }   
    if(!regexMinMaj.test(this.password)){
        alert("Merci de saisir un mot de passe contenant au moins une minuscule et une majuscule");
        return;
    }     
    if(!regexNumber.test(this.password)){
        alert("Merci de saisir un mot de passe contenant au moins un chiffre");
        return;
    }
    if(!this.login){
      alert("Merci de saisir un identifiant");
      return;
    }
    if(!this.email){
      alert("Merci de saisir un mail correct");
      return;
    }

    this.validated = true;
    }

  ngOnInit(): void {
  }

}
