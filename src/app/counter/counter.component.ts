import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent  implements OnInit{

  counter: number = 0;

  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const storedCounter = sessionStorage.getItem('counter');
      this.counter = storedCounter ? parseInt(storedCounter, 10) : 0;
    }
    console.log('creando componente');
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('counter', this.counter.toString());
    }
  }
}
