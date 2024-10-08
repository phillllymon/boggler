import React from "react";

type LetterProps = {
    letter: string,
    gridSize: number,
    highlighted: boolean
}

export const Letter: React.FC<LetterProps> = (props: LetterProps) => {
    const blockSize = 100.0 / props.gridSize;
    const blockSizeStyle = {
        "height": `${blockSize}%`,
        "width": `${blockSize}%`
    }
    const fontSizeStyle = {
        "fontSize": `${4 * blockSize}%`
    }

    return (
        <div className="letter-block" style={blockSizeStyle}>
            <div className={props.highlighted ? "letter highlighted" : "letter"}>
                <div style={fontSizeStyle}>
                    {props.letter}
                </div>
            </div>
        </div>
    );
};