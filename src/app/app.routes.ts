import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GameComponent } from './pages/game/game.component';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'game', component: GameComponent, canActivate: [AuthService] },
  { path: '**', redirectTo: '' }, // 404
];
