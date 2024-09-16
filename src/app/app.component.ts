import { Component } from '@angular/core';
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
export class AppComponent {
  title: string = 'Hola Mundo desde componente';
  
  users: string[] = ['Juan', 'Jose'];
  visible: boolean = false;
  //users: string[] = [];
  //users?: string[];

  setVisible() : void {
    this.visible = !this.visible;
  }
}
