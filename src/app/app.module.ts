import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrameworkModule } from './framework/framework.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
