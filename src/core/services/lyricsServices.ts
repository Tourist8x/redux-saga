import axios from "axios";

interface lyricsResponse {
    lyrics: string;
}

const instance = axios.create({
    headers: {"Access-Control-Allow-Origin": "*"}
  });

export async function fetchLyrics(
    artist: string,
    song: string
): Promise<lyricsResponse> {
    return await instance.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}
