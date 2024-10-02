import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { AbstractControl } from '@angular/forms';
import { Recipe } from '../../types.recipes';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.scss'
})
export class RecipesListComponent {
  recipes: Array<Recipe> = [];
  isLoading: boolean = true;
  messages: { severity: string, detail: string }[] = [];

  constructor (public recipesService: RecipesService) {
    this.recipesService.recipes.subscribe((r) => this.recipes = r);
    this.recipesService.isLoading.subscribe((i) => this.isLoading = i);
    this.recipesService.recipesError.subscribe((e) => {
      e.length && (this.messages = [{ severity: 'error', detail: e }]);
    });
  }

  onSubmit(controls: {[key: string]: AbstractControl<any, any>}) {
    const newRecipe: Recipe = {
      author: controls.author.value,
      date: new Date(),
      name: controls.name.value,
      id: (Math.random() + 1).toString(36).substring(7),
      recipe: controls.recipe.value,
    }
    this.recipesService.addRecipe(newRecipe);
  }
}
