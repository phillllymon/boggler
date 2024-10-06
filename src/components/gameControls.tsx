import React from "react";
import { WordBox } from "./wordBox";
import { WordList } from "./wordList";

export const GameControls: React.FC = () => {
    return (
        <div className="game-controls">
            <WordBox />
            <WordList />
        </div>
    );
}