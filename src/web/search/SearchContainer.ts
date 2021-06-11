import { connect } from "react-redux";
import { Dispatch } from "redux";

import { LyricActionCreator } from "../../core/actionCreators/";
import { LyricsActionType } from "../../core/actionTypes/";
import SearchComponent from "./SearchComponent";

const mapDispatchToProps = (dispatch: Dispatch<LyricsActionType.LyricsAction>) => ({
    onSearch: (artist: string, song: string) => {
        dispatch(LyricActionCreator.getLyrics(artist, song));
    },
    onClear: () => {
        dispatch(LyricActionCreator.setLyrics(""));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(SearchComponent);
