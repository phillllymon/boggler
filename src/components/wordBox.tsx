import React, { useState, useContext } from "react";
import { GameContext } from "./boggleContainer";

export const WordBox: React.FC = () => {
    const gameContext = useContext(GameContext);
    const [word, setWord] = useState("");
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (gameContext.game.checkAndAddWord(word)) {
            gameContext.setFoundWords(gameContext.game.foundWords.map(ele => ele));
            
            // highlight animation
            gameContext.setHighlightedSpaces(gameContext.game.getSpacesForWord(word));
            setTimeout(() => {
                gameContext.setHighlightedSpaces([]);
            }, 300);

            setWord("");
        };
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                className="word-box"
                placeholder="enter words here"
                value={word}
                onChange={(e) => setWord(e.target.value.toUpperCase())}
            />
        </form>
    );
}