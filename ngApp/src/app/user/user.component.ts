import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userInput = "Hello";
  userInputForm = new FormControl('Bonjour');

  constructor() { }

  ngOnInit(): void {
  }

}
