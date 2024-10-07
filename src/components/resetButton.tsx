import React, { useContext } from "react";
import { GameContext } from "./boggleContainer";

export const ResetButton: React.FC = () => {
    const gameContext = useContext(GameContext);
    const handleClick = () => {
        console.log("restart game");
        gameContext.game.resetGame();
        gameContext.setGameGrid(gameContext.game.grid);
        gameContext.setFoundWords(gameContext.game.foundWords);
    }

    return (
        <div className="game-button" onClick={handleClick}>
            Reset game
        </div>
    );
}