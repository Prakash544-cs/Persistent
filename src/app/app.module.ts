import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule } from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';

import { CanActivateMusic } from "./canActivate";

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { AuthEffects  } from './store/effects/auth.effects';
import { MusicEffects  } from './store/effects/music.effects';
import { reducers } from './store/app.states';
import { HeaderComponent } from './header/header.component';
import { ListMusicComponent } from './components/music/list-music/list-music.component';
import { AddMusicComponent } from './components/music/add-music/add-music.component';
import { EditMusicComponent } from './components/music/edit-music/edit-music.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent,
    HeaderComponent,
    ListMusicComponent,
    AddMusicComponent,
    EditMusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects,MusicEffects]),
    RouterModule.forRoot([
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: '', component: LandingComponent,canActivate: [CanActivateMusic] },
      { path: 'add-music', component: AddMusicComponent ,canActivate: [CanActivateMusic]},
      { path: 'list-music', component: ListMusicComponent, canActivate: [CanActivateMusic] },
      { path: 'edit-music/:musicId', component: EditMusicComponent, canActivate: [CanActivateMusic] },
      { path: '**', redirectTo: '/',canActivate: [CanActivateMusic] }
    ])
  ],
  providers: [Store, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

