import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//     Boolean
// );

const loggerMiddleWare = (store) => (next) => (action) => {
    if (!action.type) return next(action);

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("Next State: ", store.getState());
}

const middleWares = [loggerMiddleWare];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);