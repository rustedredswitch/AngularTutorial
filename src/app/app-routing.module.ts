import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './componenti/contact/contact.component';
import { ContactsComponent } from './componenti/contacts/contacts.component';
import { HomeComponent } from './componenti/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [{ path: ':id', component: ContactComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
