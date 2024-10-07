import React, { useContext } from "react";
import { GameContext } from "./boggleContainer";

export const UploadGrid: React.FC = () => {
    const gameContext = useContext(GameContext);

    return (
        <div>
            Upload grid here!
        </div>
    );
}