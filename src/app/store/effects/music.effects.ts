import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map,  mergeMap } from 'rxjs/operators';

import { ListDataSucess, LIST_MUSICS, ListMusics,DELETE_MUSICS,DeleteMusicSuccess, DeleteMusics,ADD_MUSICS,UPDATE_MUSICS,UpdateMusics,UpdateEditSuccess, AddMusics , AddSuccess } from '../actions/music.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';


@Injectable()
export class MusicEffects {

    constructor(
        private actions: Actions,
        private Musicervice: AuthService,
        private router: Router,
      ) {}


      @Effect({dispatch: true})
      ListMusics: Observable<any> =  this.actions.pipe(
                ofType(LIST_MUSICS),
                map((action: ListMusics) => action),
                mergeMap(payload => {
                    return this.Musicervice.getAllMusics().pipe(
                        map((data) => new ListDataSucess(data)));
         }));

         @Effect({dispatch: true})
         createMusics: Observable<any> = this.actions.pipe(
             ofType(ADD_MUSICS),
             map((action: AddMusics) => action.payload),
             mergeMap(payload => {
                 return this.Musicervice.createMusic(payload.song, payload.movie).pipe(
                     map((data) => {
                         if (data){
                            return new AddSuccess(data);
                         }
                     }));
             }));
             @Effect({dispatch: true})
             UpdateProduct: Observable<any> =  this.actions.pipe(
                  ofType(UPDATE_MUSICS),
                  map((action: UpdateMusics) => action.payload),
                  mergeMap(payload => {
                      return this.Musicervice.updateMusic(payload.index,payload.newProduct).pipe(
                         map((data) => {
                             if (data) {
                                  return new UpdateEditSuccess(data);
                             }
                          }));
                  }));

                  @Effect({dispatch: true})
                        DeleteProduct: Observable<any> =  this.actions.pipe(
                                ofType(DELETE_MUSICS),
                                map((action: DeleteMusics) => action.payload),
                                mergeMap(payload => {
                                    return this.Musicervice.deleteMusic(payload).pipe(
                                        map((data) => {
                                          
                                            if (data) {
                                               
                                                return new DeleteMusicSuccess();

                                            }
                                        }));
                                }));     

}
