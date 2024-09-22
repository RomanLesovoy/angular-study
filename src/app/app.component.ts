import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { BodyGalaxyBgComponent } from "./body-galaxy-bg/body-galaxy-bg.component";
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SocialLoginModule,
    HeaderComponent,
    BodyGalaxyBgComponent,
    HeaderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public title = 'angular-study'
}
