import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesService } from './services/recipes.service';
import { DatabaseService } from '../shared/services/database.service';



@NgModule({
  declarations: [RecipeComponent, RecipesListComponent],
  exports: [RecipeComponent, RecipesListComponent],
  providers: [RecipesService, DatabaseService],
  imports: [CommonModule],
})
export class RecipesModule { }
