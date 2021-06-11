import { DefaultButton, Separator } from "@fluentui/react";
import React, { FunctionComponent, useState } from "react";
import LyricsContainer from "../lyrics/LyricsContainer";

interface Props {
    onSearch(artist: string, song: string): void;
    onClear(): void;
}

const SearchComponent: FunctionComponent<Props> = props => {
    const { onSearch, onClear } = props;
    const [artist, setArtist] = useState("Coldplay");
    const [song, setSong] = useState("Adventure of a Lifetime");

    return (
        <div className="card mt-3">
            <div className="card-header">
                <div className="row">
                    <div className="col-4">
                        <h4>Lyric Search</h4>
                    </div>
                    <div className="col-8">

                    </div>
                </div>

            </div>
            <div className="card-body">
                <input
                    value={artist}
                    placeholder="artist"
                    onChange={e => setArtist(e.target.value)}
                /><br></br>
                <input
                    value={song}
                    placeholder="song"
                    onChange={e => setSong(e.target.value)}
                />
                <br></br>
                <DefaultButton onClick={() => { onSearch(artist, song); }} >Get Lyrics</DefaultButton>&nbsp;
                <DefaultButton onClick={onClear}>Clear Results</DefaultButton>
                <Separator />
                <LyricsContainer error={""} isLoading={false} lyrics={""}></LyricsContainer>
            </div>
        </div>

    );
};

export default SearchComponent;
