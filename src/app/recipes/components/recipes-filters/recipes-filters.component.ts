import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { FieldValue, InputType } from '../../../shared/Input.shared';

@Component({
  selector: 'app-recipes-filters',
  templateUrl: './recipes-filters.component.html',
  styleUrl: './recipes-filters.component.scss'
})
export class RecipesFiltersComponent {
  search: string = '';
  public enumType: typeof InputType = InputType;

  constructor (public recipesService: RecipesService) {}

  onSearch(value: FieldValue) {
    this.recipesService.getFromDb(value as string);
  }
}
