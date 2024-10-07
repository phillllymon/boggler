import React, { useState } from "react";
import { CustomizeModal } from "./customizeModal";

export const CustomizeButton: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleClick = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <>
            <div className="game-button" onClick={handleClick}>
                Customize
            </div>
            {modalOpen && (
                <CustomizeModal closeModal={closeModal} />
            )}
        </>
    );
}