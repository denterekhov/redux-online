//Core
import { combineReducers } from 'redux';

//Reducers
import { authReducer as auth } from '../bus/auth/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';

export const rootReducer = combineReducers({
  auth,
  posts,
  profile,
  ui,
})