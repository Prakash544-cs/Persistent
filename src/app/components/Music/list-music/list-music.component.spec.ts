import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { ListMusicComponent } from './list-music.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/services/auth.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
describe('ListMusicComponent', () => {
  let component: ListMusicComponent;
  let fixture: ComponentFixture<ListMusicComponent>;
  let store: MockStore;
  const initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMusicComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, RouterModule],
      providers: [provideMockStore({ initialState }), AuthService],
    })
      .compileComponents();
    store = TestBed.inject(MockStore);
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(ListMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
