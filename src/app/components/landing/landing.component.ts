import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { AuthService } from '../../services/auth.service';

import { Music } from '../../models/music'

import { AppState, selectAuthState } from '../../store/app.states';
import { LogOut } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  getState: Observable<any>;
  isAuthenticated: false;
  user = null;
  errorMessage = null;

  musics: Music[];

  constructor(
    private store: Store<AppState>, private apiService: AuthService
  ) {this.getState = this.store.select(selectAuthState);
  }

  ngOnInit() {
    this.getState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });

    this.apiService.getAllMusics()
      .subscribe(data => {
        this.musics = data
      })
  }

  logOut(): void {
    this.store.dispatch(new LogOut);
  }

}

