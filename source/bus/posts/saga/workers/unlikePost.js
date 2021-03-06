//Core
import { put, apply, select } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* unlikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());
        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

        const userId = yield select(({ profile }) => {
            return profile.get('id');
        });

        yield put(postsActions.unlikePost({ postId, userId }));
    } catch (error) {
        yield put(uiActions.emitError(error, 'unlikePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
