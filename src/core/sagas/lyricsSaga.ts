import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import { fetchLyrics } from "../services/lyricsServices";
import { LyricActionCreator } from "../actionCreators/";
import { LyricsActionType } from "../actionTypes/";

function* onLoadLyrics({ artist, song }: LyricsActionType.GetLyricsAction) {
  try {
    yield put(LyricActionCreator.getLyricsRequest());
    const { data } = yield call(fetchLyrics, artist, song);
    yield put(LyricActionCreator.getLyricsSuccess(data.lyrics));
  } catch (error) {
    yield put(LyricActionCreator.getLyricsFailure(error.response.data.error));
  }
}

function* watchOnLoadLyrics() {
  yield takeEvery(LyricsActionType.GET_LYRICS, onLoadLyrics);
}

export default function* lyricsSaga() {
  yield all([fork(watchOnLoadLyrics)]);
}
