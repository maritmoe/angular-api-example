import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonItemComponent } from './person-item/person-item.component';

@NgModule({
  declarations: [PeopleListComponent, PersonItemComponent],
  imports: [CommonModule],
  exports: [PeopleListComponent],
})
export class PeopleModule {}
