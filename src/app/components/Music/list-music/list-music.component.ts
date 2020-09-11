import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AppState, selectMusicState } from '../../../store/app.states';
import {Store} from '@ngrx/store';
import { ListMusics } from '../../../store/actions/music.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-music',
     templateUrl: './list-music.component.html',
    styleUrls: ['./list-music.component.scss']
})
export class ListMusicComponent implements OnInit {

  public musics:any
  isUpdateActivated = false;
  
  getState: Observable<any>;
  errorMessage: string | null;
  constructor(public musicService: AuthService,private store: Store<AppState>) { 
    this.getState = this.store.select(selectMusicState);
  }
  ngOnInit(): void {
  
    this.store.dispatch(new ListMusics());
    this.store.subscribe(data => {
        this.musics = data.music.musics;
    });

  }

  deleteMusic(id){
    this.musicService.deleteMusic(id).subscribe(res => {
         this.musics = this.musics.filter(item => item.id !== id);
    })
   }
 

}
