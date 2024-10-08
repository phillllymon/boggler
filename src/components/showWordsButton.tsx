import React, { useContext } from "react";
import { GameContext } from "./boggleContainer";

export const ShowWordsButton: React.FC = () => {
    const gameContext = useContext(GameContext);
    
    const handleClick = () => {
        const wordsToShow = Object.keys(gameContext.game.wordsInGrid);
        gameContext.game.foundWords = wordsToShow;
        gameContext.setFoundWords(wordsToShow);
    }

    return (
        <>
            <div className="game-button" onClick={handleClick}>
                Show answers
            </div>
        </>
    );
}