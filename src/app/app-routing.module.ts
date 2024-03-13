import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { PersonViewComponent } from './people/person-view/person-view.component';

const routes: Routes = [
  { path: '', component: PeopleListComponent },
  { path: 'person/:id', component: PersonViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
