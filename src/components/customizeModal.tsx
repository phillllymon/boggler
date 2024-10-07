import React, { useState } from "react";
import { EditGrid } from "./editGrid";
import { UploadGrid } from "./uploadGrid";
import { EditWordList } from "./editWordList";
import { UploadWordList } from "./uploadWordList";


type CustomizeModalProps = {
    closeModal: () => void
};

enum mode {
    "editGrid",
    "uploadGrid",
    "editWordList",
    "uploadWordList"
}

export const CustomizeModal: React.FC<CustomizeModalProps> = (props: CustomizeModalProps) => {
    const [customizeMode, setCustomizeMode] = useState(mode.editGrid);

    return (
        <>
            <div className="modal-curtain" onClick={props.closeModal}></div>
            <div className="modal">
                {customizeMode === mode.editGrid && <EditGrid />}
                {customizeMode === mode.uploadGrid && <UploadGrid />}
                {customizeMode === mode.editWordList && <EditWordList />}
                {customizeMode === mode.uploadWordList && <UploadWordList />}
                <div className="customize-button-area">
                    <div className="game-button" onClick={() => setCustomizeMode(mode.editGrid)}>
                        Edit grid
                    </div>
                    <div className="game-button" onClick={() => setCustomizeMode(mode.uploadGrid)}>
                        Upload grid
                    </div>
                    <div className="game-button" onClick={() => setCustomizeMode(mode.editWordList)}>
                        Edit word list
                    </div>
                    <div className="game-button" onClick={() => setCustomizeMode(mode.uploadWordList)}>
                        Upload word list
                    </div>
                    <div className="game-button" onClick={props.closeModal}>
                        Done
                    </div>
                </div>
            </div>
        </>
    );
}