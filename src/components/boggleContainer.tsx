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
    setHighlightedSpaces: (newSpaces: number[][]): void => {}, // will be overwritten with setState below
    gameGrid: game.grid,
    setGameGrid: (newGrid: string[][]): void => {}, // will be overwritten with setState below
    numWordsInGrid: game.numWordsInGrid,
    setNumWordsInGrid: (newNum: number): void => {} // will be overwritten with setState below
});

export const BoggleContainer: React.FC = () => {
    const [wordsToShow, setWordsToShow] = useState(game.foundWords);
    const [highlightedSpacesToShow, setHighlightedSpacesToShow] = useState(emptySpaces);
    const [gameGridToShow, setGameGridToShow] = useState(game.grid);
    const [numWordsInGridToShow, setNumWordsInGridToShow] = useState(game.numWordsInGrid);
    return (
        <GameContext.Provider value={{
            game: game,
            foundWords: wordsToShow,
            setFoundWords: setWordsToShow,
            highlightedSpaces: highlightedSpacesToShow,
            setHighlightedSpaces: setHighlightedSpacesToShow,
            gameGrid: gameGridToShow,
            setGameGrid: setGameGridToShow,
            numWordsInGrid: numWordsInGridToShow,
            setNumWordsInGrid: setNumWordsInGridToShow
        }}>
            <div className="boggle-container">
                <LettersContainer />
                <GameControls />
            </div>
        </GameContext.Provider>
    );
}