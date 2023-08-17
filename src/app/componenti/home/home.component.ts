import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeform!: FormGroup;

  ngOnInit(): void {
    this.homeform = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl('test@local', [
        Validators.required,
        Validators.email,
      ]),
      colore: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.homeform);
  }
}
