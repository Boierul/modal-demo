import { useEffect } from 'react';

/**
 * Hook that handles clicks outside of the passed ref, customized for dropdowns.
 * @param {(Dispatch<SetStateAction<string | undefined>>)} setChecked
 */
const useOutsideClickHandler = (_className, callback) => {
    useEffect(() => {
        function handleClickOutside(event) {
            const { className } = event.target;

            // 
            if (!className.includes(_className)) {
                callback();
            }
        }
        console.log('handleClickOutside')
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useOutsideClickHandler;
