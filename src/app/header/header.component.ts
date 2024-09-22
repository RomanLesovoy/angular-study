import { SocialUser, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { DialogModalComponent } from '../shared/dialog-modal/dialog-modal.component';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { NavComponent } from "../nav/nav.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, GoogleSigninButtonModule, DialogModalComponent, NavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: SocialUser | null = null;
  loggedIn: boolean = false;
  modalRef: DialogModalComponent | null = null;

  constructor (protected authService: AuthService) {}

  signOut() {
    this.authService.signOut();
  }

  setModalRef = (modalRef: DialogModalComponent) => {
    this.modalRef = modalRef;
  }

  openModal = () => {
    this.modalRef?.openModal();
  }

  ngOnInit() {
    this.authService.user.subscribe((user) => {
      this.user = user;
      this.loggedIn = !!user;
    });
  }
}
