import { Meta, Story } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideMockStore } from '@ngrx/store/testing';


import { LandingComponent } from './landing.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

export default {
  title: 'Landing component',
  component: LandingComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;
const Template: Story<LandingComponent> = (args: LandingComponent) => ({
  component: LandingComponent,
  template: `<app-landing></app-landing>`,
  styles: ['./landing.component.scss'],
  moduleMetadata: {
    imports: [
      RouterTestingModule.withRoutes([]),
      FormsModule,
       HttpClientModule,
      ReactiveFormsModule,
    ],
    declarations: [LandingComponent],
    providers: [provideMockStore(), AuthService],
  },
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  viewLogin : true,
};




