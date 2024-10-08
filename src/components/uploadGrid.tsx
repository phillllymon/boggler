import React, { useContext, useState } from "react";
import { GameContext } from "./boggleContainer";

export const UploadGrid: React.FC = () => {
    const gameContext = useContext(GameContext);
    const [uploadedContent, setUploadedContent] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFileUpload = (e: any) => {
        if (e.target && e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const str = reader.result as string;
                if (str.length > 100) {
                    setErrorMessage("File too big!");
                } else {
                    setErrorMessage("");
                    setUploadedContent(str);
                }
            };
            reader.readAsText(file);
        }
    }

    const handleSubmit = () => {
        const newGrid = uploadedContent.split("\n").map((rowStr) => {
            return rowStr.split("");
        });
        if (newGrid.length < 3 || newGrid[0].length < 3) {
            setErrorMessage("Grid too small!");
        } else {
            gameContext.game.setGrid(newGrid);
            gameContext.setGameGrid(newGrid);
            gameContext.setNumWordsInGrid(gameContext.game.numWordsInGrid);
        }
    }

    return (
        <div className="customize-action-area">
            <div className="error-message">
                {errorMessage}
            </div>
            Upload a text file with the letters in rows
            <br/>
            <br/>
            <div className="horizontal-row">
                <div>
                    example:
                    <br/>
                    <div className="example-file">
                        ABCD
                        <br/>
                        EFGH
                        <br/>
                        IJKL
                        <br/>
                        MNOP
                    </div>
                </div>
                <div>
                    uploaded:
                    <br/>
                    <div id="uploaded-content" className="example-file">
                        {uploadedContent}
                    </div>
                </div>
            </div>
            
            <br/>
            <br/>
            <input type="file" onChange={(e) => { handleFileUpload(e) }} />
            <div className="game-button small-button" onClick={handleSubmit}>
                Save grid
            </div>
        </div>
    );
}