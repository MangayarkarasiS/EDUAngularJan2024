import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormsModule } from '@angular/forms';
import { LifeCycleChileComponent } from './life-cycle-chile/life-cycle-chile.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleComponent,
    LifeCycleChileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
