import React from "react";
import { WordBox } from "./wordBox";
import { WordList } from "./wordList";
import { ResetButton } from "./resetButton";
import { CustomizeButton } from "./customizeButton";

export const GameControls: React.FC = () => {
    return (
        <div className="game-controls">
            <CustomizeButton />
            <ResetButton />
            <WordBox />
            <WordList />
        </div>
    );
}