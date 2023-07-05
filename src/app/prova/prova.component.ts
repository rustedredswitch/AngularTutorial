import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent implements OnInit {
  isDisabled = false;
  image = '';
  image1 =
    'https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg';
  image2 =
    'https://img.freepik.com/free-photo/colorful-beautiful-flowers-background-blossom-floral-bouquet-decoration-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1105.jpg';
  cani = [
    {
      nome: 'Roger',
      razza: 'Golden Retriever',
      descrizione: `I Golden Retriever sono cani di taglia media con un mantello folto e dorato.
      Sono noti per la loro dolcezza e amichevolezza, sono l'ideale per famiglie e bambini.
      Sono intelligenti, socievoli e amano stare all'aria aperta.`,
    },
  ];

  constructor() {
    console.log('costruttore');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    setInterval(() => {
      this.image === this.image1 ? this.image = this.image2 : this.image = this.image1
    }, 2000);
  }
}
