import React, { useState } from "react";
import { LettersContainer } from "./lettersContainer";
import { GameControls } from "./gameControls";
import { Game } from "../game";

const game = new Game();

const emptySpaces: number[][] = [];
export const GameContext = React.createContext({
    game: game,
    foundWords: game.foundWords,
    setFoundWords: (newList: string[]): void => {}, // will be overwritten with setState below
    highlightedSpaces: emptySpaces,
    setHighlightedSpaces: (newSpaces: number[][]): void => {}
});

export const BoggleContainer: React.FC = () => {
    const [wordsToShow, setWordsToShow] = useState(game.foundWords);
    const [highlightedSpacesToShow, setHighlightedSpacesToShow] = useState(emptySpaces);
    return (
        <GameContext.Provider value={{
            game: game,
            foundWords: wordsToShow,
            setFoundWords: setWordsToShow,
            highlightedSpaces: highlightedSpacesToShow,
            setHighlightedSpaces: setHighlightedSpacesToShow
        }}>
            <div className="boggle-container">
                <LettersContainer />
                <GameControls />
            </div>
        </GameContext.Provider>
    );
}