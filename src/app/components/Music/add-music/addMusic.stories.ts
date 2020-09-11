import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';

import { AddMusicComponent } from './add-music.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

export default {
  title: 'AddMusic component',
  component: AddMusicComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<AddMusicComponent> = (args: AddMusicComponent) => ({
  component: AddMusicComponent,
  template: `<app-add-music></app-add-music>`,
  styles: ['./app-add-music.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [AddMusicComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});

export const Add = Template.bind({});
// Add.args = {
//   viewLogin : true,
// };

// export const SignUp = Template.bind({});
// SignUp.args = {
//   viewLogin : true,
// };


