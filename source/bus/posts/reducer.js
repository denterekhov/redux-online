//Core
import { fromJS, List } from 'immutable';

import { FILL_POSTS, CREATE_POST } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILL_POSTS:
            return fromJS(action.payload);
      
        case CREATE_POST:
            return [fromJS(action.payload), ...state];
      
        default:
            return state;
    }
}