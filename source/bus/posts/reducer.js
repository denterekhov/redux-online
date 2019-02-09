//Core
import { fromJS, List } from 'immutable';

import { types } from './types';

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_POSTS:
            return fromJS(action.payload);
      
        case types.CREATE_POST:
            return [fromJS(action.payload), ...state];
      
        default:
            return state;
    }
}