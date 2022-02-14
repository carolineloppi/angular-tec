import { CursosModule } from './cursos/cursos.module';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntermediateComponent } from './intermediate/intermediate.component';

@NgModule({
  declarations: [AppComponent, InlineTemplateComponent, IntermediateComponent],
  imports: [BrowserModule, AppRoutingModule, CursosModule], //ASK:
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
