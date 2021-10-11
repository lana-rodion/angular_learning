import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInput = "Hello";
  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  userInputForm = new FormControl('Bonjour');

  constructor() { }

  ngOnInit(): void {
  }

  // display form values
  showForm() {
    console.log(this.userForm);
  }
}
