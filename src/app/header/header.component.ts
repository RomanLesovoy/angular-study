import { SocialUser, GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { DialogModalComponent } from '../shared/dialog-modal/dialog-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, GoogleSigninButtonModule, DialogModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  user: SocialUser | null = null;
  loggedIn: boolean = false;
  modalRef: DialogModalComponent | null = null;

  constructor (private authService: SocialAuthService) {

  }

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
    this.authService.authState.subscribe((user) => {
      console.log(user)
      this.user = user;
      this.loggedIn = !!user;
    });
  }
}
