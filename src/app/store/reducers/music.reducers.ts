import { Music } from '../../models/music';
import { LIST_MUSICS, 
  LIST_DATA_SUCCESS, MusicsActions, 
  ADD_MUSICS, UPDATE_MUSICS ,DELETE_MUSICS ,
  DELETE_MUSIC_SUCCESS, UPDATE_MUSIC_SUCCESS}  from '../actions/music.actions';

export interface State {
  musics: Music[];
  user: Music | null;

}

const initialState: State = {
    musics: [],
    user: null
  
};

export function musicReducer(
  state = initialState,
  action: MusicsActions
)

{
    
  switch (action.type) {
    
    case LIST_MUSICS:
      return {
        ...state,
        musics: [...state.musics]
      };
      case LIST_DATA_SUCCESS: {
        return {
            musics: action.payload,
          message: null
        };
      }
      case ADD_MUSICS: {
          return {
              ...state
          }
        }
      case UPDATE_MUSICS: {
            return {
                    ...state
            };
          }
      case DELETE_MUSICS: {
        return {
                ...state
            };
      }   

      case DELETE_MUSIC_SUCCESS: {
        return {
         ...state,
        };
        }
        case UPDATE_MUSIC_SUCCESS: {
          return {
           ...state,
            message: 'The Music is updated successfully!',
            added: true
          };
          }
     default:
      return state;
  }
}
