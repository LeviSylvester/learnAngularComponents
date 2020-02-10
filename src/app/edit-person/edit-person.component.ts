import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DisplayPersonsService} from '../display-persons.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  person = {};

  constructor(private route: ActivatedRoute, private service: DisplayPersonsService, private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const setItems = data => (this.person = data);
    this.service.getPerson(id).subscribe(setItems);
  }

  editOnSubmit() {
    this.service.updatePerson(this.person).subscribe(() => {
      this.router.navigateByUrl('/persons'); });
  }
}
