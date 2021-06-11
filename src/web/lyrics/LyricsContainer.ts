import { connect } from "react-redux";
import { AppState } from "../../core/reducers/rootReducer";
import {LyricsActionType} from "../../core/actionTypes/";
import { LyricsComponent } from "./LyricsComponent";
const mapStateToProps = (state: AppState) => ({
    lyrics: state.lyrics.lyrics,
    isLoading: state.isLoading[LyricsActionType.GET_LYRICS],
    error: state.error[LyricsActionType.GET_LYRICS]
});
export default connect(mapStateToProps, null)(LyricsComponent);
