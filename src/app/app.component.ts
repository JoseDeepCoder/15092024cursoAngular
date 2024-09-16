import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!);
    
  }

  title: string = 'Hola Mundo desde componente';
  
  subTitle = 'Contador con estado de session soy el padre';

  users: string[] = ['Juan', 'Jose'];
  visible: boolean = false;
  //users: string[] = [];
  //users?: string[];

  counter: number = 0;

  setVisible() : void {
    this.visible = !this.visible;
  }

  setCounter(counter: number): void {
    this.counter = counter;
  }
}
