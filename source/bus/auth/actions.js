//Types
import { types } from './types';

export const authActions = {
    // Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },
    logout: () => {
        return {
            type: types.LOGOUT,
        };
    },

    // Async
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    loginAsync: (userCredentials) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: userCredentials,
        };
    },
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        };
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },
};
