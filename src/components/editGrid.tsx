import React, { useContext, useState } from "react";
import { deepCopy } from "../util";
import { letters } from "../constants";
import { GameContext } from "./boggleContainer";


export const EditGrid: React.FC = () => {
    const gameContext = useContext(GameContext);
    const [grid, setGrid] = useState(deepCopy(gameContext.game.grid));

    return (
        <div className="customize-action-area">
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
                                        key={cIdx}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
            <button>
                Save grid
            </button>
        </div>
    );
}