import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonItemComponent } from './person-item/person-item.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonViewComponent } from './person-view/person-view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PeopleListComponent, PersonItemComponent, PersonViewComponent],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [PeopleListComponent, PersonViewComponent],
})
export class PeopleModule {}
