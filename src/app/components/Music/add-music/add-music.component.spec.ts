import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthService } from '../../../services/auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AddMusicComponent } from './add-music.component';
import { FormsModule } from '@angular/forms'  
import { RouterTestingModule } from '@angular/router/testing';

describe('AddMusicComponent', () => {
  let component: AddMusicComponent;
  let fixture: ComponentFixture<AddMusicComponent>;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  }; 


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,FormsModule,RouterTestingModule],
      declarations: [ AddMusicComponent ],
      providers:[AuthService,provideMockStore({initialState})]
    })
    .compileComponents();
    store = TestBed.inject(MockStore);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
