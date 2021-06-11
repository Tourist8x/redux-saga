import React from "react";
interface IProps {
    lyrics: string;
    isLoading: boolean;
    error: Error | string;
}

export const LyricsComponent: React.FunctionComponent<IProps> = ({ lyrics, isLoading, error }) => {
    // const { lyrics, isLoading, error } = props;
    if (error) {
        console.log("error: ", error);
        return <div>{error}</div>;
    }

    if (isLoading) {
        return <div>{"Loading.."}</div>;
    }
    console.log('test - ' + lyrics);
    return (<div>{lyrics}</div>);
};
