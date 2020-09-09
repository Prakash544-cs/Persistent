
import { EditMusicComponent } from './edit-music.component';
import { AuthService } from '../../../services/auth.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
 
describe('EditMusicComponent', () => {
  let component: EditMusicComponent;
  let fixture: ComponentFixture<EditMusicComponent>;
  let store: MockStore;
  // const initialState = {
  //   isAuthenticated: false,
  //   user: null,
  //   errorMessage: null
  // };
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditMusicComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      providers: [provideMockStore(), AuthService]
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(EditMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});