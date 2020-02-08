import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() persons;
  @Input() handleClickEvent;
  @Output() newPersonSelectedEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectNewPerson(person) {
    this.newPersonSelectedEvent.emit(person);
  }
}
