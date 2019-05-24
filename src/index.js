import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux';

import reducer from './reducers';
import rootSaga from './sagas';

import App from './containers/Signin';
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
