import {put, takeLatest, all} from 'redux-saga/effects';

// function* fetchNews() {
//     const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
//         .then(response => response.json(),);
//     yield put({type: "NEWS_RECEIVED", json: json.articles,});
// }
//
// function* actionWatcher() {
//     yield takeLatest('GET_NEWS', fetchNews)
// }

function *actionCheckLogin() {
    try {

        const response = yield {};
        const data = response.data;

        // dispatch a success action to the store with the new dog
        yield put({ type: "API_CALL_SUCCESS", data });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: "API_CALL_FAILURE", error });
    }
}

export default function *rootSaga() {
    yield all([
        // actionWatcher(),
        actionCheckLogin()
    ]);
}
