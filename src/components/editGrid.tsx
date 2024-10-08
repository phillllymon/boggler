import React, { useContext, useState } from "react";
import { deepCopy, isDefined } from "../util";
import { letters } from "../constants";
import { GameContext } from "./boggleContainer";


export const EditGrid: React.FC = () => {
    const gameContext = useContext(GameContext);
    const [grid, setGrid] = useState(deepCopy(gameContext.game.grid));
    const [size, setSize] = useState(grid.length);

    const handleLetterChange = (rIdx: number, cIdx: number, letter: string) => {
        if (letter.length < 2) {
            const newGrid = grid.map((row, r) => {
                return row.map((val, c) => {
                    if (r === rIdx && c === cIdx) {
                        if (letters.includes(letter.toUpperCase())) {
                            return letter.toUpperCase();
                        } else {
                            return "";
                        }
                    } else {
                        return val;
                    }
                });
            });
            setGrid(newGrid);
        }
    };

    const handleSizeInput = (n: string) => {
        const newSize = parseInt(n);
        const newGrid: string[][] = [];
        for (let i = 0; i < newSize; i++) {
            const newRow: string[] = [];
            for (let j = 0; j < newSize; j++) {
                if (isDefined(grid[i]) && isDefined(grid[i][j])) {
                    newRow.push(grid[i][j]);
                } else {
                    newRow.push("");
                }
            }
            newGrid.push(newRow);
        }
        setSize(newSize);
        setGrid(newGrid);
        gameContext.game.gridSize = newSize;
    }

    const handleSubmit = () => {
        gameContext.game.setGrid(grid);
        gameContext.setGameGrid(grid);
        gameContext.setNumWordsInGrid(gameContext.game.numWordsInGrid);
    };

    return (
        <div className="customize-action-area">
            <div className="horizontal-row">
                <div>
                    grid size:
                </div>
                <input
                    type="number"
                    className="char-input"
                    value={size}
                    onChange={(e) => handleSizeInput(e.target.value)}
                />
            </div>
            <div>
                {grid.map((row, rIdx) => {
                    return (
                        <div className="horizontal-row" key={rIdx}>
                            {row.map((val, cIdx) => {
                                return (
                                    <input
                                        type="text"
                                        className="char-input"
                                        value={val}
                                        onChange={(e) => handleLetterChange(rIdx, cIdx, e.target.value)}
                                        key={cIdx}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <div className="game-button small-button" onClick={handleSubmit}>
                Save grid
            </div>
        </div>
    );
}