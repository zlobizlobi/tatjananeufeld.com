import { useEffect } from 'react';

export const useDetectKeyboard = () => {
    useEffect(() => {
        function handleFirstTab(e: KeyboardEvent) {
            if (e.keyCode === 9) {
                document.body.classList.add('user-is-tabbing');
                window.removeEventListener('keydown', handleFirstTab);
            }
        }
        function handleMouseMove() {
            document.body.classList.remove('user-is-tabbing');
            window.removeEventListener('mousemove', handleMouseMove);
        }

        window.addEventListener('keydown', handleFirstTab);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('keydown', handleFirstTab);
            window.addEventListener('mousemove', handleMouseMove);
        };
    }, [])
};

