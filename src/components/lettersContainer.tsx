import React from "react";
import { Letter } from "./letter";
import { GameContext } from "./boggleContainer";

export const LettersContainer: React.FC = () => {
    return (
        <GameContext.Consumer>
            {gameContext => {
                const highlightedSpacesCodes = gameContext.highlightedSpaces.map((pos) => {
                    return `${pos[0]}-${pos[1]}`;
                });
                return (
                    <div className="letters-container">
                        {gameContext.game.grid.map((row, rIdx) => {
                            return row.map((letter, cIdx) => {
                                return (
                                    <Letter
                                        letter={letter}
                                        gridSize={row.length}
                                        highlighted={highlightedSpacesCodes.includes(`${rIdx}-${cIdx}`)}
                                        key={`${rIdx}${cIdx}`}
                                    /> 
                                );
                            });
                        })}
                    </div>
                )
            }}
        </GameContext.Consumer>
        
    );
}