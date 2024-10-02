import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { PanelModule } from 'primeng/panel';
import { MessagesModule } from 'primeng/messages';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipesService } from './services/recipes.service';
import { DatabaseService } from '../shared/services/database.service';
import { SharedModule } from '../shared/shared.module';
import { RecipesFiltersComponent } from "./components/recipes-filters/recipes-filters.component";

@NgModule({
  declarations: [RecipeComponent, RecipesFiltersComponent, RecipesListComponent],
  exports: [RecipesListComponent],
  providers: [RecipesService, DatabaseService],
  imports: [CommonModule, SharedModule, ProgressSpinnerModule, MessagesModule, PanelModule, ButtonModule, SplitterModule],
})
export class RecipesModule { }
