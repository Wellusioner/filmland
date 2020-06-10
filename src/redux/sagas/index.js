import { call, put, all, takeLatest } from 'redux-saga/effects'
import Actions from '../actions'
import { api } from 'services'


function* fetchAll(action) {
    try{
        const { data: { data }} = yield call(
            api.request.get,
            api.queryBuilder('/list', {...action.payload})
        );

        yield put(Actions.FETCH_ALL.success(data));

    } catch (err) {
        yield put(Actions.FETCH_ALL.failure(err));
        console.log(err);
    }
}

function* fetchOne(action) {
    const { id } = action.payload;
    try {
        const { data: { data: { movie }}}  = yield call(api.request.get, api.queryBuilder(`/show/${id}`,{}));
        yield put(Actions.FETCH_ONE.success({ ...movie }));
    } catch (err) {
        console.log(err);
    }
}

function* fetchSlider(action) {
    try{
        const { data: { data: { movies } }} = yield call(
            api.request.get,
            api.queryBuilder('/list', {...action.payload})
        );

        yield put(Actions.FETCH_SLIDER.success([...movies.slice(0,4)]));

    } catch (err) {
        yield put(Actions.FETCH_SLIDER.failure(err));
        console.log(err);
    }
}

export default function* root() {
    yield all([
        takeLatest(Actions.FETCH_SLIDER.REQUEST, fetchSlider),
        takeLatest(Actions.FETCH_ALL.REQUEST, fetchAll),
        takeLatest(Actions.FETCH_ONE.REQUEST, fetchOne)
    ])
}