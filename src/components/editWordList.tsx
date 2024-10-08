import React, { useContext, useState } from "react";
import { GameContext } from "./boggleContainer";

export const EditWordList: React.FC = () => {
    const gameContext = useContext(GameContext);

    const initialWords = gameContext.game.allWords.join("\n");
    const [words, setWords] = useState(initialWords);

    const handleChange = (e: any) => {
        setWords(e.target.value);
    }

    const handleSubmit = () => {
        const newWords = words.split("\n");
        gameContext.game.setWords(newWords);
        gameContext.setNumWordsInGrid(gameContext.game.numWordsInGrid);
    }

    return (
        <div className="customize-action-area">
            <textarea
                onChange={(e) => {handleChange(e)}}
                className="tall-input"
                value={words}
            />
            <div className="game-button small-button" onClick={handleSubmit}>
                Save words
            </div> 
        </div>
    );
}