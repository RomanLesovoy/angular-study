import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BodyGalaxyBgComponent } from "./body-galaxy-bg/body-galaxy-bg.component";
import { ModalDataComponent } from './shared/modal-data/modal-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModalDataComponent, BodyGalaxyBgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  
}
