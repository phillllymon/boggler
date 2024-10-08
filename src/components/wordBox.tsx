import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "./boggleContainer";

export const WordBox: React.FC = () => {
    const gameContext = useContext(GameContext);
    const [word, setWord] = useState("");
    const [numFound, setNumFound] = useState(0);
    const numWords = gameContext.numWordsInGrid;
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
            setNumFound(numFound + 1);
        };
    }

    useEffect(() => { // listen for grid getting reset to reset number of words found
        setNumFound(0);
    }, [gameContext.game.grid]);

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                className="word-box"
                placeholder="enter words here"
                value={word}
                onChange={(e) => setWord(e.target.value.toUpperCase())}
            />
            <div className="word-counter">
                {`${numFound} / ${numWords} words found`}
            </div>
        </form>
    );
}