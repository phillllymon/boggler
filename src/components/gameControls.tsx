import React from "react";
import { WordBox } from "./wordBox";
import { WordList } from "./wordList";
import { ResetButton } from "./resetButton";
import { CustomizeButton } from "./customizeButton";
import { ShowWordsButton } from "./showWordsButton";

export const GameControls: React.FC = () => {
    return (
        <div className="game-controls">
            <ResetButton />
            <CustomizeButton />
            <ShowWordsButton />
            <WordBox />
            <WordList />
        </div>
    );
}