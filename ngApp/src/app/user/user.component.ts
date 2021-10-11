import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DateService } from '../shared/date.service';

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

  /*dateService: DateService;

  constructor(dateService: DateService) { 
    this.dateService = dateService;
  }*/

  constructor(public dateService: DateService) { }

  ngOnInit() {
    this.dateService.date;
  }

  // display form values
  showForm() {
    console.log(this.userForm);
  }
}
