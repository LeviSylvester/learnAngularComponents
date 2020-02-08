import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnAngularComponents';

  person = {};
  persons = [
    {id: 1, name: 'John', surname: 'Smith', gender: 'female', address: 'Hollywood'},
    {id: 2, name: 'Julie', surname: 'Moore', gender: 'female', address: 'Los Angeles'},
    {id: 3, name: 'John', surname: 'Doe', gender: 'male', address: 'New York'},
    {id: 4, name: 'Jake', surname: 'Sanders', gender: 'male', address: 'Texas'}
  ];

  newPersonSelected(person) {
    this.person = person;
  }
}
