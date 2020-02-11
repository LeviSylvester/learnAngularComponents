import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisplayPersonsService } from '../display-persons.service';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css'],
})
export class CreatePersonComponent implements OnInit {
  person = {
    id: '',
    name: '',
    surname: '',
    gender: '',
    address: '',
  };

  constructor(private service: DisplayPersonsService, private router: Router) {}

  ngOnInit() {
  }

  createOnSubmit() {
    this.service.createPerson(this.person).subscribe(() => {
      this.router.navigateByUrl('/persons');
    });
  }
}
