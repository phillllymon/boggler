import React, { useContext } from "react";
import { GameContext } from "./boggleContainer";

export const UploadWordList: React.FC = () => {
    const gameContext = useContext(GameContext);

    return (
        <div>
            Upload word list here!
        </div>
    );
}