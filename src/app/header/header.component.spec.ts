import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { AuthService } from '../../app/services/auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms' 
import { RouterTestingModule } from '@angular/router/testing';
import { ThemeService } from '../services/theme-color.service';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: ThemeService;
  let store: MockStore;



  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  }; 


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule, FormsModule],
      declarations: [ HeaderComponent ],
      providers:[AuthService,provideMockStore({initialState})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
    service = TestBed.inject(ThemeService);
  }));

  it('change theme to be called', () => {
    component.changeTheme();
    spyOn(service, 'setLightTheme');
    spyOn(service, 'setDarkTheme');
    fixture.whenStable().then(() => {
      expect(component.changeTheme).toBeCalledTimes(1);
      expect(component.theme).toBe('light');
      expect(service.setLightTheme).toBeCalledTimes(1);
      expect(service.setDarkTheme).not.toHaveBeenCalled();
    });
  });
 
  it('change theme to be called', () => {
    component.theme = 'dark';
    component.changeTheme();
    spyOn(component.themeService, 'setLightTheme');
    spyOn(component.themeService, 'setDarkTheme');
    fixture.whenStable().then(() => {
      expect(component.changeTheme).toBeCalled();
      expect(component.theme).toBe('');
      expect(component.themeService.setLightTheme).not.toHaveBeenCalled();
      expect(component.themeService.setDarkTheme).toBeCalledTimes(1);
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
