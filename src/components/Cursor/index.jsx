import {useState, useEffect} from 'react';
import styles from './Cursor.module.sass';

const Cursor = () => {
    // Initialize the cursor at the top right outside the screen
    const [cursorXY, setCursorXY] = useState({x: -100, y: -100});
    const [size, setSize] = useState(50);

    // Listen to each mouse movement to update the custom cursor
    useEffect(() => {
        const moveCursor = (e) => {
            // Divide by 2 to put the mouse in the middle
            const x = e.clientX - size / 2;
            const y = e.clientY - size / 2;
            setCursorXY({x, y});
        };
        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [size]);

    return (
        <div
            className={styles.container}
            style={{
                transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
                width: size,
                height: size,
            }}>
        </div>
    );
};

export default Cursor;
