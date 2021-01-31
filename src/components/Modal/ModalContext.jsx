import React, { createContext, useState } from 'react';
import { Modal } from './Modal';

// Modal Context
export const ModalContext = createContext(undefined);

// Modal Provider
export const ModalProvider = ({ children }) => {
    const showModal = modalContent => {
        setModalState({ ...modalState, modalContent, open: true });
    };

    const hideModal = () => {
        setModalState({ ...modalState });
    };

    const [modalState, setModalState] = useState({
        modalContent: null,
        showModal,
        hideModal,
        open: false,
    });

    const { modalContent } = modalState;

    return (
        <ModalContext.Provider value={{ ...modalState }}>
            {children}
            <Modal>{modalContent}</Modal>
        </ModalContext.Provider>
    );
};

/**
 * Modal hook
 *
 * @example
 *  const { hideModal, showModal, modalContent } = useModal();
 *
 *  <Button onClick={() => showModal(<Text size="1">Hello World</Text>)} />
 *
 *  <Button onClick={() => hideModal()} />
 */
