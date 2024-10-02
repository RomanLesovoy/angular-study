import { Injectable } from '@angular/core';
import { Recipe } from '../types.recipes';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from '../../shared/services/database.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  public recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject([] as Recipe[]);
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private recipesDbKey = 'recipes';

  constructor(private database: DatabaseService) {
    this.getFromDb();
  }

  addRecipe(recipe: Recipe) {
    const updatedArray = [...this.recipes.getValue(), recipe];
    this.updateOnDb(updatedArray);
  }

  deleteRecipe(recipe: Recipe) {
    const updatedArray = this.recipes.getValue().filter((r) => r.id !== recipe.id);
    this.updateOnDb(updatedArray);
  }

  editRecipe(recipe: Recipe) {
    const recipeIndex = this.recipes.getValue().findIndex((r) => r.id === recipe.id);
    const updatedArray = [...this.recipes.getValue()];
    updatedArray[recipeIndex] = recipe;

    this.updateOnDb(updatedArray);
  }

  async getFromDb() {
    this.isLoading.next(true);

    try {
      const result = await this.database.get<Recipe[]>(this.recipesDbKey);
      this.recipes.next(result || [])
    } catch (e) {
      console.log(e)
      throw new Error(e as string);
    } finally {
      this.isLoading.next(false);
    }
  }

  async updateOnDb(updatedArray: Recipe[]) {
    this.isLoading.next(true);
    try {
      const result = await this.database.execute<Recipe[]>(this.recipesDbKey, updatedArray);
      this.recipes.next(result);
    } catch (e) {
      throw new Error(e as string);
    } finally {
      this.isLoading.next(false);
    }
  }
}
