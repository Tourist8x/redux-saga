import { LyricsActionType } from "../actionTypes";

export interface LyricsState {
    lyrics: string;
}

const initialState: LyricsState = {
    lyrics: ""
};

export default function lyricsReducer(
    state: LyricsState = initialState,
    action: LyricsActionType.LyricsAction
): LyricsState {
    switch (action.type) {
        case LyricsActionType.SET_LYRICS:
        case LyricsActionType.GET_LYRICS_SUCCESS:
            return { lyrics: action.lyrics };
        default:
            return state;
    }
}
