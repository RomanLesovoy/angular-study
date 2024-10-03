import { Injectable } from '@angular/core';
import { Recipe } from '../types.recipes';
import { BehaviorSubject } from 'rxjs';
import { Validators } from '@angular/forms';
import { DatabaseService } from '../../shared/services/database.service';
import { IInputProps, InputType } from '../../shared/Input.shared';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipesDbKey = 'recipes';
  public recipes: BehaviorSubject<Recipe[]> = new BehaviorSubject([] as Recipe[]);
  public recipesError: BehaviorSubject<string> = new BehaviorSubject('');
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public recipesForm: Array<IInputProps> = [
    {
      name: 'name',
      label: 'Type Name',
      onChange: () => {},
      type: InputType.Text,
      validations: [Validators.minLength(3), Validators.required],
    },
    {
      name: 'author',
      label: 'Type Author',
      onChange: () => {},
      type: InputType.Text,
      validations: [Validators.minLength(3), Validators.required],
    },
    {
      name: 'recipe',
      label: 'Type Recipe',
      onChange: () => {},
      type: InputType.TextArea,
      validations: [Validators.minLength(50), Validators.required],
    },
  ];

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

  async getFromDb(search?: string) {
    this.isLoading.next(true);
    const searchLowerCase = (search || '').toLowerCase();

    try {
      const result = (await this.database.get<Recipe[]>(this.recipesDbKey)).filter((r) => !!r && !!r.name);
      const resultWithSearch = search
        ? result.filter(r => [r.author, r.name, r.recipe].some((r) => r.toLowerCase().indexOf(searchLowerCase) !== -1))
        : result;

      this.recipes.next(resultWithSearch || []);
    } catch (e) {
      this.recipesError.next(e as string);
      throw new Error(e as string);
    } finally {
      this.isLoading.next(false);
    }
  }

  async updateOnDb(updatedArray: Recipe[]) {
    this.isLoading.next(true);
    try {
      const result = await this.database.execute<Recipe[]>(this.recipesDbKey, updatedArray.filter((r) => !!r && !!r.name));
      this.recipes.next(result);
    } catch (e) {
      this.recipesError.next(e as string);
      throw new Error(e as string);
    } finally {
      this.isLoading.next(false);
    }
  }
}
