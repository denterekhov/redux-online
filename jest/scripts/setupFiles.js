// Mocks
import { LocalStorage } from './mocks/localStorage';
import { fetch } from './mocks/fetch';

const successMessage = 'TEST_SUCCESS_MESSAGE.';
const errorMessage = 'TEST_ERROR_MESSAGE.';
const token = 'TEST_TOKEN';
const error = new Error(errorMessage);
const meta = 'META_INFORMATION';

const users = [
    {
        id:        'TEST_ID_1',
        avatar:    'TEST_AVATAR_1',
        firstName: 'Test user firstName 1',
        lastName:  'Test user lastName 1',
    },
    {
        id:        'TEST_ID_2',
        avatar:    'TEST_AVATAR_2',
        firstName: 'Test user firstName 2',
        lastName:  'Test user lastName 2',
    }
];

const userProfile = {
    id:        'TEST_ID',
    avatar:    'TEST_AVATAR',
    firstName: 'Walter',
    lastName:  'White',
    token,
};

const credentials = {
    email:    'test@email.com',
    password: '1111',
    remember: true,
};

const responseDataSuccess = {
    data:    userProfile,
    message: successMessage,
};

const responseDataFail = {
    message: errorMessage,
};

const fetchResponseSuccess = {
    status: 200,
    json:   jest.fn(() => Promise.resolve(responseDataSuccess)),
};

const fetchResponseSuccess204 = {
    status: 204,
};

const fetchResponseFail401 = {
    status: 401,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const fetchResponseFail400 = {
    status: 400,
    json:   jest.fn(() => Promise.resolve(responseDataFail)),
};

const url = 'https://www.url.com';

const newName = {
    firstName: 'Walter',
    lastName:  'White',
};

const newAvatar = ['avatar'];

const newPassword = {
    oldPassword: 12345,
    newPassword: 123456,
};

global.__ = {
    userProfile,
    errorMessage,
    token,
    error,
    meta,
    responseDataSuccess,
    responseDataFail,
    fetchResponseSuccess,
    fetchResponseSuccess204,
    fetchResponseFail401,
    fetchResponseFail400,
    credentials,
    url,
    users,
    newName,
    newAvatar,
    newPassword,
};
global.fetch = fetch;
global.localStorage = new LocalStorage();
