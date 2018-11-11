import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './form/template-form/template-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    EqualValidatorDirective,
    MobileValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
