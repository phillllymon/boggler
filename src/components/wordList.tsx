import React from "react";
import { GameContext } from "./boggleContainer";

export const WordList: React.FC = () => {
    return (
        <GameContext.Consumer>
            {gameContext => {
                return (
                    <div className="word-list">
                        {gameContext.game.foundWords.map((word, i) => {
                            return (
                                <div key={i}>
                                    {word}
                                </div>
                            );
                        })}
                    </div>
                );
            }}
        </GameContext.Consumer>
        
    );
}