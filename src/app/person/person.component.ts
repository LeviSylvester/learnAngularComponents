import {Component, OnInit} from '@angular/core';
import { DisplayPersonsService } from '../display-persons.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons = [];
  constructor(private service: DisplayPersonsService) { }

  refreshPage() {
    const setItems = data => (this.persons = data);
    this.service.getPeople().subscribe(setItems);
  }

  ngOnInit() {
    this.refreshPage();
  }

  clickToDeletePerson(id) {
    this.service.deletePerson(id).subscribe(() => {
      this.refreshPage();
    });
  }

}
