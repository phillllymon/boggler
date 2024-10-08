import React, { useContext, useState } from "react";
import { GameContext } from "./boggleContainer";

export const UploadWordList: React.FC = () => {
    const gameContext = useContext(GameContext);
    const [uploadedContent, setUploadedContent] = useState("");

    const handleFileUpload = (e: any) => {
        if (e.target && e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const str = reader.result as string;
                setUploadedContent(str);
            };
            reader.readAsText(file);
        }
    }

    const handleSubmit = () => {
        const newWords = uploadedContent.split("\n").map(ele => ele.toUpperCase());
        gameContext.game.setWords(newWords);
        gameContext.setNumWordsInGrid(gameContext.game.numWordsInGrid);
    }

    return (
        <div className="customize-action-area">
            Upload a text file with one word per line and no other characters
            <br/>
            <br/>
            <div className="horizontal-row">
                <div>
                    example:
                    <br/>
                    <div className="example-file">
                        FRIEND
                        <br/>
                        HELLO
                        <br/>
                        CAT
                        <br/>
                        MOPED
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
                Save words
            </div>
        </div>
    );
}