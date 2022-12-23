import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  frameworksList: Array<string> = ['VueJS', 'NextJS'];

  add(value: string) {
    if (value.length === 0) {
      return;
    }

    this.frameworksList.push(value);
  }
}
