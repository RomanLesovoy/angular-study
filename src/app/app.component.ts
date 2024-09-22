import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DialogModalComponent } from './shared/dialog-modal/dialog-modal.component';
import { BodyGalaxyBgComponent } from "./body-galaxy-bg/body-galaxy-bg.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DialogModalComponent, BodyGalaxyBgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  
}
