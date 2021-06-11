import { combineReducers } from "redux";
import lyricsReducer from "./lyricsReducer";
import isLoadingReducer from "./isLoadingReducer";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  lyrics: lyricsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
