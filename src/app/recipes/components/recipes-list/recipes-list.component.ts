import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { Recipe } from '../../types.recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  recipes: Array<Recipe> = [];
  isLoading: boolean = true;

  constructor (private recipesService: RecipesService) {
    console.log('get')
    this.recipesService.recipes.subscribe((r) => this.recipes = r);
    this.recipesService.isLoading.subscribe((i) => this.isLoading = i);
  }

}
