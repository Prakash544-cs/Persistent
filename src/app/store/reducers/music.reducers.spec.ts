// import {
//     LIST_MUSICS,
//     ADD_MUSICS,
//     AddMusics,
//   } from '../actions/music.actions';
//   import { Music } from '../../models/music';
//   import { musicReducer } from './music.reducers';
  
//   export interface State {
//     products: Music[];
//     message: string | null;
//   }
  
//   const payload: Music = {
//     song: 'JBL Headphones ',
//     movie: 'Mobile and Accessories',
//   };
  
//   describe('initialState', () => {
//     test('is correct', () => {
//       const action = new AddMusics(payload);
//       const initialState = { products: [], message: null };
//       expect(musicReducer(undefined, action)).toEqual(initialState);
//     });
//   });