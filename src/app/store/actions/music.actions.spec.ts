import { ListDataSucess, LIST_MUSICS, ListMusics,DELETE_MUSICS,DeleteMusicSuccess, DeleteMusics,ADD_MUSICS,UPDATE_MUSICS,UpdateMusics,UpdateEditSuccess, AddMusics , AddSuccess, DELETE_MUSIC_SUCCESS } from '../actions/music.actions';


describe('DeleteProductSuccess', () => {
    it('should create an action', () => {
      const action = new DeleteMusicSuccess();
      expect({ ...action }).toEqual({
        type: DELETE_MUSIC_SUCCESS,
      });
    });
  });