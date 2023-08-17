import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeform!: FormGroup;

  constructor(private fire: FirebaseService) {}

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

    this.fire
      .insertPersona({
        nome: this.homeform.value.nome,
        email: this.homeform.value.email,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
