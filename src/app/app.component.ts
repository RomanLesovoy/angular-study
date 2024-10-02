import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipesModule } from './recipes/recipes.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RecipesModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Recipes';
}
