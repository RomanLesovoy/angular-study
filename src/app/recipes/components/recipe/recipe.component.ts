import { Component, Input } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../types.recipes';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent {
  @Input() recipe!: Recipe;

  constructor (public recipesService: RecipesService) {

  }
}
