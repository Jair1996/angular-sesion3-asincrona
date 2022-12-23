import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrameworkPageComponent } from './pages/framework-page/framework-page.component';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    FrameworkPageComponent,
    FormComponent
  ],
  exports: [
    FrameworkPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FrameworkModule { }
