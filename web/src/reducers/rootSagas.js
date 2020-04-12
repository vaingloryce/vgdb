import { all, fork } from 'redux-saga/effects';
import { watchFetchHeroes } from './heroes/sagas';

export default function* root() {
  yield all([
    fork(watchFetchHeroes)
  ]);
}