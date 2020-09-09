import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";
import {Router} from "@angular/router";


import { AppState  } from '../../../store/app.states';
import { Store } from '@ngrx/store';
import { AddMusics,ListMusics } from 'src/app/store/actions/music.actions';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.scss']
})
export class AddMusicComponent implements OnInit {
 
  constructor(private router: Router, 
             private store: Store<AppState>) { }
              music: any = {
                song : null,
                movie: null
              }

  addForm: FormGroup;

  ngOnInit() {

  }

  onSubmit() {
    const payload = {
      song: this.music.song,
      movie: this.music.movie
    };
    this.store.dispatch(new AddMusics(payload));
    this.store.dispatch(new ListMusics());
    this.router.navigate(['/list-music']);
  }
}
