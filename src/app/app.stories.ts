
import { Meta, Story } from '@storybook/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';



import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthService } from './services/auth.service';
import { AuthEffects  } from './store/effects/auth.effects';
import { MusicEffects  } from './store/effects/music.effects';
import { reducers } from './store/app.states';
import { HeaderComponent } from './header/header.component';
import { ListMusicComponent } from '../app/components/Music/list-music/list-music.component';
import { AddMusicComponent } from '../app/components/Music/add-music/add-music.component';
import { EditMusicComponent } from '../app/components/Music/edit-music/edit-music.component';

export default {
  title: 'App component',
  component: AppComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  moduleMetadata: {
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
      EffectsModule.forFeature([AuthEffects, MusicEffects]),
      RouterModule.forRoot([
        { path: 'log-in', component: LogInComponent },
        { path: 'sign-up', component: SignUpComponent },
        { path: '', component: LandingComponent },
        { path: 'add-music', component: AddMusicComponent },
        { path: 'list-music', component: ListMusicComponent },
        { path: 'edit-music/:musicId', component: EditMusicComponent },
        { path: '**', redirectTo: '/'}
      ]),
    ],
    providers: [Store, AuthService, { provide: APP_BASE_HREF, useValue: '/' }],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
  },
  props: { args },
});
export const App = Template.bind({});

