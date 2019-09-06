import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AComponent } from './a/a.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { A21Component } from './a21/a21.component';
import { A22Component } from './a22/a22.component';
import { A23Component } from './a23/a23.component';
import { A11Component } from './a11/a11.component';
import { A12Component } from './a12/a12.component';
import { A13Component } from './a13/a13.component';
import { A211Component } from './a211/a211.component';
import { A212Component } from './a212/a212.component';
import { A3Component } from './a3/a3.component';
import { A31Component } from './a3/a31/a31.component';
import { A32Component } from './a3/a32/a32.component';
import { A311CounterComponent } from './a3/a31/a311-counter/a311-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AComponent,
    A1Component,
    A2Component,
    A21Component,
    A22Component,
    A23Component,
    A11Component,
    A12Component,
    A13Component,
    A211Component,
    A212Component,
    A3Component,
    A31Component,
    A32Component,
    A311CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AComponent]
})
export class AppModule { }
