import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';
import {Store} from '@ngrx/store';


import { ListMusicComponent } from './list-music.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

export default {
  title: 'ListMusic component',
  component: ListMusicComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<ListMusicComponent> = (args: ListMusicComponent) => ({
  component: ListMusicComponent,
  template: `<app-list-music></app-list-music>`,
  styles: ['./list-music.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [ListMusicComponent],
    providers: [provideMockStore(), AuthService, Store],
  },
  props: args,
});

export const List = Template.bind({});
List.args = {
  viewLogin : true,
};




