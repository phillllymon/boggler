import React, { useContext } from "react";
import { GameContext } from "./boggleContainer";

export const EditWordList: React.FC = () => {
    const gameContext = useContext(GameContext);

    return (
        <div>
            Edit word list here!
        </div>
    );
}