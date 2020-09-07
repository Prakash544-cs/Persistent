import { createFeatureSelector } from '@ngrx/store';
import * as auth from './reducers/auth.reducers';

import * as music from './reducers/music.reducers';

export interface AppState {
  music: any;
  authState: auth.State;
  musicState:music.State
}


export const reducers = {
    auth: auth.reducer,
    music:music.musicReducer
  };

  export const selectAuthState = createFeatureSelector<AppState>('auth');
  export const selectMusicState = createFeatureSelector<AppState>('music');