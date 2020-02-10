import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { DetailComponent } from './detail/detail.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { CreatePersonComponent } from './create-person/create-person.component';

// conteaza ordinea in care se pun rutele
// cele mai specifice la inceput si cele mai putin specifice la final
// in cazul de fata, "persons/:id" facea match inainte sa ajunga la
// "persons/create" si de aceea nu intra in formularul de create person
const routes: Routes = [
  {
    path: 'persons/create',
    component: CreatePersonComponent,
  },
  {
    path: 'persons',
    component: PersonComponent,
  },
  {
    path: 'persons/:id',
    component: DetailComponent,
  },
  {
    path: 'persons/:id/edit',
    component: EditPersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
