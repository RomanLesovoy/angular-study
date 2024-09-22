import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectNameDirective } from './direct-name.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DirectNameDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lesson-1';
  show = true;
}
