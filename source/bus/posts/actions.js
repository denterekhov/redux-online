//Types
import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST, CREATE_POST_ASYNC } from './types';

//Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type: FILL_POSTS,
        payload: posts,
    }
}

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch ({
        type: FETCH_POSTS_ASYNC,
    });
    const response = await api.posts.fetch();
    const { data } = await response.json();
    dispatch(fillPosts(data));
};

export const createPost = (post) => {
    return {
        type: CREATE_POST,
        payload: post,
    }
}

export const createPostAsync = (comment) => async (dispatch) => {
    dispatch ({
        type: CREATE_POST_ASYNC,
    });
    const response = await api.posts.create(comment);
    const { data } = await response.json();
    dispatch(createPost(data));
};