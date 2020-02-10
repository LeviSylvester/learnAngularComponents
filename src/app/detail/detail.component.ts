import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DisplayPersonsService} from '../display-persons.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  person = {};

  constructor(private route: ActivatedRoute, private service: DisplayPersonsService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const setItems = data => (this.person = data);
    this.service.getPerson(id).subscribe(setItems);
  }

}
