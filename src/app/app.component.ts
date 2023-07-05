import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularTutorial';
  isVisible: Boolean = true;

  // onInput(event: Event) {
  //   this.title = (<HTMLInputElement>event.target).value;
  //   // console.log((<HTMLInputElement> event.target).value);
  // }

  onClick(event: Event) {
    this.title = "Hai cliccato il bottone";
    this.isVisible = !this.isVisible;
  }
}
