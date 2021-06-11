import { LyricsActionType } from "../actionTypes/index";

export class LyricActionCreator {
    static setLyrics(lyrics: string): LyricsActionType.SetLyricsAction {
        return {
            type: LyricsActionType.SET_LYRICS,
            lyrics
        };
    }

    static getLyrics(
        artist: string,
        song: string
    ): LyricsActionType.GetLyricsAction {
        return {
            type: LyricsActionType.GET_LYRICS,
            artist,
            song
        };
    }

    static getLyricsRequest(): LyricsActionType.GetLyricsRequestAction {
        return {
            type: LyricsActionType.GET_LYRICS_REQUEST
        };
    }

    static getLyricsSuccess(
        lyrics: string
    ): LyricsActionType.GetLyricsSuccessAction {
        return {
            type: LyricsActionType.GET_LYRICS_SUCCESS,
            lyrics
        };
    }

    static getLyricsFailure(
        error: Error | string
    ): LyricsActionType.GetLyricsFailureAction {
        return {
            type: LyricsActionType.GET_LYRICS_FAILURE,
            error
        };
    }
}

