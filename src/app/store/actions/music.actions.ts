import { Action } from '@ngrx/store';
import {Music} from '../../models/music';


export const LIST_MUSICS = '[Musics] List Fetch';
export const ADD_MUSICS = '[Musics] Add Music';
export const ADD_DATA_SUCCESS='[Musics] Add Success';
export const UPDATE_MUSICS = '[Musics] Update Recipe';
export const DELETE_MUSICS = '[Musics] Delete Recipe';
export const LIST_DATA_SUCCESS='[Musics] List Success';
export const DELETE_MUSIC_SUCCESS='[Music] Delete product success';
export const UPDATE_MUSIC_SUCCESS='[Music] Update product success';

export class ListMusics implements Action {
  Music(Music: any) {
      throw new Error("Method not implemented.");
  }
  readonly type = LIST_MUSICS;
}

export class ListDataSucess implements Action {
    readonly type = LIST_DATA_SUCCESS;
    constructor(public payload: Music[]) {}
  }

export class AddMusics implements Action {
  readonly type = ADD_MUSICS;

  constructor(public payload: any) {}
}

export class AddSuccess implements Action {
  readonly type = ADD_DATA_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateMusics implements Action {
  readonly type = UPDATE_MUSICS;

  constructor(public payload: { index: number; newProduct: Music }) {}
}

export class DeleteMusics implements Action {
  readonly type = DELETE_MUSICS;

  constructor(public payload: number) {}
}

export class UpdateEditSuccess implements Action {
    readonly type = UPDATE_MUSIC_SUCCESS;
    constructor(public payload: Music) {}
  }
  
  export class DeleteMusicSuccess implements Action {
    readonly type = DELETE_MUSIC_SUCCESS;
    }

export type MusicsActions =
  | ListMusics
  | ListDataSucess
  | AddMusics
  | AddSuccess
  | UpdateMusics
  | DeleteMusics
  | UpdateEditSuccess
  | DeleteMusicSuccess

