import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent  implements OnInit{

  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();

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
      this.counterEmmit.emit(this.counter);
    }
  }
}
