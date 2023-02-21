import {useEffect, useState} from 'react'

import './App.module.sass'
import srcImg1 from './images/mode/lycan-mode-ethan-piboyeux-2.jpg'
import srcImg2 from './images/mode/lycan-mode-ethan-piboyeux-4.jpg'
import styles from './App.module.sass'
import ModalImage from "./components/ModalImage/index.jsx"
import Cursor from "./components/Cursor/index.jsx"

function App() {
    // Modal image variables
    const [imageModal, setImageModal] = useState('');
    const [altModal, setAltModal] = useState('');
    const [displayModal, setDisplayModal] = useState(false);

    // Function to change the image according to the image that is clicked on
    const handleImage = (e) => {
        // Display the modal only if the screen is greater than 900px --> when we are in row
        if (window.innerWidth > 900) {
            setImageModal(e.target.src);
            setAltModal(e.target.alt);
            setDisplayModal(true);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to hide the image on click or scroll
    useEffect(() => {
        // Deactivate the image if and only if the image is already activated
        const clickOrScrollHandler = () => {
            // console.log(displayModal)
            if (displayModal) {
                setDisplayModal(false);
            }
        };

        // Use a listener for each click
        window.addEventListener('click', clickOrScrollHandler, false);
        // Use a listener for each type of browser
        // IE9, Chrome, Safari, Opera
        window.addEventListener('mousewheel', clickOrScrollHandler, false);
        // Firefox
        window.addEventListener('DOMMouseScroll', clickOrScrollHandler, false);
        // Mobile
        window.addEventListener('touchmove', clickOrScrollHandler, false);

        return () => {
            // Remove the listeners
            window.removeEventListener('click', clickOrScrollHandler, false);
            // IE9, Chrome, Safari, Opera
            window.removeEventListener('mousewheel', clickOrScrollHandler, false);
            // Firefox
            window.removeEventListener('DOMMouseScroll', clickOrScrollHandler, false);
            // Mobile
            window.removeEventListener('touchmove', clickOrScrollHandler, false);
        };
    }, [displayModal]);

    return (
        <>
            {/*<Cursor/>*/}
            <ModalImage image={imageModal} alt={altModal} display={displayModal}/>

            <div className={styles.container}>
                <div className={styles.images__container}>
                    <div className={`${styles.row} ${styles.animation__transform_top}`}>
                        <img
                            src={srcImg1}
                            alt="Alt"
                            onClick={handleImage}
                        />
                        <img
                            src={srcImg2}
                            alt="Alt"
                            onClick={handleImage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
