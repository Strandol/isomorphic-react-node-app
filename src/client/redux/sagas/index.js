import { all, call } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    call(function* () {})
  ]);
}

export default rootSaga;
