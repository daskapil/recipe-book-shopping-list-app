import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy{ 
  isAuthenticated = false;
  userSub = new Subject<User>();

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) { }
  
  ngOnInit(): void {
    this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user;
      }
    );
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }
}
