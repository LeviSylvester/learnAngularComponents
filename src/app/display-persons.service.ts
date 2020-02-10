import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DisplayPersonsService {
  constructor(private http: HttpClient) {}

  personsUrl = 'http://localhost:3000/persons';

  getPeople() {
    return this.http.get(this.personsUrl);
  }

  getPerson(id) {
    return this.http.get(this.personsUrl + '/' + id);
  }

  deletePerson(id) {
    return this.http.delete(this.personsUrl + '/' + id);
  }

  updatePerson(person) {
    return this.http.put(this.personsUrl + '/' + person.id, person);
  }

  createPerson(person) {
    // daca te uiti in documentatie la POST o sa vezi ca spre deosebire
    // de PUT aici nu ai nevoie sa ii specifici idul
    // PUT /persons/1
    // POST /persons
    // return this.http.post(this.personsUrl + '/' + person.id, person);
    return this.http.post(this.personsUrl, person);
  }
}
