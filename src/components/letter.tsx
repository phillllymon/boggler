import React from "react";

type LetterProps = {
    letter: string,
    highlighted: boolean
}

export const Letter: React.FC<LetterProps> = (props: LetterProps) => {
    return (
        <div className="letter-block" >
            <div className={props.highlighted ? "letter highlighted" : "letter"}>
                <div>
                    {props.letter}
                </div>
            </div>
        </div>
    );
};