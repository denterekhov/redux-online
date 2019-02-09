//Core
import { applyMiddleware, compose } from 'redux';

//Middleware
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { customThunk } from './custom';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../rootSaga';


const logger = createLogger({
    duration: true,
    collapsed: true,
    colors: {
        title:      () => '#139BFE',
        prevState:  () => '#1C5FAF',
        action:     () => '#149945',
        nextState:  () => '#A47104',
        error:      () => '#FF0005',
    }
});

const sagaMiddleware = createSagaMiddleware();
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = __DEV__ && devtools ? devtools : compose;

const middleware = [sagaMiddleware, customThunk];

if (__DEV__) {
    middleware.push(logger);
}

const enhancedStore = composeEnhancers(applyMiddleware(...middleware));

export { enhancedStore, sagaMiddleware }