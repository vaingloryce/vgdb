import { put, takeLatest } from 'redux-saga/effects';
import {
  HEROES_LIST_REQUEST,
  HEROES_LIST_FETCHING,
  HEROES_LIST_SUCCESS,
  HEROES_LIST_FAILURE,
} from '../../models/heroes/constants';
import { fetchHeroes } from '../../models/heroes/api';

function* _watchFetchHeroes(action) {
  yield put({ type: HEROES_LIST_FETCHING });
  try {
    const response = yield fetchHeroes(action.payload);
    yield put({ type: HEROES_LIST_SUCCESS, payload: response });
  } catch(error) {
    yield put({ type: HEROES_LIST_FAILURE, payload: error });
  }
}

export function* watchFetchHeroes() {
  yield takeLatest(HEROES_LIST_REQUEST, _watchFetchHeroes);
}