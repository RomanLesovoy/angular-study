import { Injectable } from '@angular/core';
import { SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Subject<SocialUser | null> = new Subject();
  public loggedIn: boolean = false;

  private get storageKey() { return 'google-user' };

  constructor (private authService: SocialAuthService, private router: Router) {
    this.authService.authState.subscribe((_user) => {
      const user = _user || this.getStorageUser();
      this.user.next(user);
      this.loggedIn = !!user;
    });
  }

  public async signOut() {
    window.localStorage.removeItem(this.storageKey);
    try {
      await this.authService.signOut();
    } finally {
      this.user.next(null);
      this.loggedIn = false;
      this.router.navigateByUrl('');
    }
  }

  async canActivate(): Promise<boolean> {
    return this.loggedIn;
  }

  public saveUser(user: SocialUser): void {
    window.localStorage.setItem(this.storageKey, JSON.stringify(user));
  }

  private getStorageUser(): SocialUser | null {
    try {
      return JSON.parse(
        String(window.localStorage.getItem(this.storageKey))
      );
    } catch(e) {
      return null
    }
  }
}
