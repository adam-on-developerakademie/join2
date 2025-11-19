import { Routes } from '@angular/router';
import { crud } from './crud/crud';
import { Contacts } from './contacts/contacts';
import { Login } from './login/login';
import { AppShell } from './shared/layout/app-shell/app-shell';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
{
path: 'login', component: Login},

{path: '', component: AppShell, children: [

  { path: '', redirectTo: 'Contacts', pathMatch: 'full' },
  { path: 'summary', redirectTo: 'contacts', pathMatch: 'full' },
  { path: 'contacts', component: Contacts },
  { path: 'board', component: crud },
  { path: 'crud', component: crud },
  // { path: 'addc', component: AddContactComponent },
],
},
];
