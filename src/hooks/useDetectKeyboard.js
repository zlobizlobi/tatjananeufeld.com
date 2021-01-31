import { useEffect } from 'react';

export const useDetectKeyboard = () => {
    function handleFirstTab(e) {
        if (e.keyCode === 9) {
            document.body.classList.add('user-is-tabbing');
            window.removeEventListener('keydown', handleFirstTab);
        }
    }

    function handleMouseMove() {
        document.body.classList.remove('user-is-tabbing');
        document.body.removeEventListener('mousemove', handleMouseMove);
    }

    useEffect(() => {
        document.body.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('keydown', handleFirstTab);

        return () => {
            document.body.addEventListener('mousemove', handleMouseMove);
            window.removeEventListener('keydown', handleFirstTab);
        };
    });
};
