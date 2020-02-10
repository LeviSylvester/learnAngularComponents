import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule} from '@angular/common/http';
import { DisplayPersonsService } from './display-persons.service';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { CreatePersonComponent } from './create-person/create-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    DetailComponent,
    EditPersonComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DisplayPersonsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
