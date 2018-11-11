import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupFormComponent } from './template-driven-forms/signup-form/signup-form.component';
import { SignupReactiveFormComponent } from './reactive-forms/signup-reactive-form/signup-reactive-form.component';

const routes: Routes = [
  {
    path: 'template',
    component: SignupFormComponent,
  },
  {
    path: 'reactive',
    component: SignupReactiveFormComponent ,
  },
  {
    path: '',
    redirectTo: '/template',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
