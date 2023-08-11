import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  sub: any;

  ngOnInit(): void {
    // new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // }).subscribe((number) => {
    //   console.log(number);
    // });

    this.sub = interval(1000).subscribe((number) => {
      console.log(number);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
