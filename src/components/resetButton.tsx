import React, { useContext } from "react";
import { GameContext } from "./boggleContainer";

export const ResetButton: React.FC = () => {
    const gameContext = useContext(GameContext);
    const handleClick = () => {
        gameContext.game.resetGame();
        gameContext.setGameGrid(gameContext.game.grid);
        gameContext.setFoundWords(gameContext.game.foundWords);
        gameContext.setNumWordsInGrid(gameContext.game.numWordsInGrid);
    }

    return (
        <div className="game-button" onClick={handleClick}>
            New game
        </div>
    );
}