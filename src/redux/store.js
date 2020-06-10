import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './sagas'

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    let middleware = [
        applyMiddleware(sagaMiddleware)
    ];

    const store = createStore(
        rootReducer,
        compose(...middleware)
    );

    sagaMiddleware.run(rootSaga);

    return store
};

export default configureStore