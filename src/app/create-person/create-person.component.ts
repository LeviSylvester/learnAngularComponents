import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DisplayPersonsService} from '../display-persons.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {

  person = {
    id: '', name: '', surname: '', gender: '', address: ''
  };

  constructor(private route: ActivatedRoute, private service: DisplayPersonsService, private router: Router) {
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id') + 1;
    const setItems = data => (this.person = data);
    this.service.createPerson(this.person).subscribe(setItems);
  }

  createOnSubmit() {
    this.service.createPerson(this.person).subscribe(() => {
      this.router.navigateByUrl('/persons'); });
  }

}
