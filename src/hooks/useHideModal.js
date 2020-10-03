import { useEffect } from 'react';
import { useModal } from './useModal';

export const useKeyEscapeModal = () => {
    const { hideModal } = useModal();

    const handleOnKeydown = (e) => {
        if (e.keyCode === 27 && e.key === 'Escape') {
            hideModal();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleOnKeydown);

        return () => window.removeEventListener('keydown', handleOnKeydown);
    });
};

export const useClickEscapeModal = (
    modalRef
) => {
    const { hideModal } = useModal();

    const handleOnMouseDown = (e) => {
        if (!modalRef.current) {
            return;
        }

        if (!modalRef.current.contains(e.target)) {
            hideModal();
        }
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleOnMouseDown);

        return () => window.removeEventListener('mousedown', handleOnMouseDown);
    });
};

export const useHideModal = () => ({ useClickEscapeModal, useKeyEscapeModal });
