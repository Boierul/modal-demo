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
        // console.log(displayModal);
        // Display the modal only if the screen is greater than 900px --> when we are in row
        setImageModal(e.target.src);
        setAltModal(e.target.alt);
        setDisplayModal(true);
        // console.log('image src:', imageModal);
        // console.log('image alt:', altModal);
        // console.log(displayModal);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Function to hide the image on click or scroll
    useEffect(() => {
        // Deactivate the image if and only if the image is already activated
        const clickOrScrollHandler = () => {
            console.log(displayModal);
            if (displayModal) {
                setDisplayModal(!displayModal);
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
    });

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2a2a2a',
        }}>
            <Cursor/>
            {/* <a href="#" target="_blank"*/}
            {/*   className={`${styles.link} ${styles.animation__background}`}*/}
            {/*   style={{*/}
            {/*       fontSize: '2.6rem',*/}
            {/*       fontWeight: '300',*/}
            {/*       fontFamily: 'Montserrat, sans-serif',*/}
            {/*   }}>*/}
            {/*    Voir la video*/}
            {/*</a>*/}

            {displayModal && <ModalImage image={imageModal} alt={altModal} display={displayModal}/>}
            {/*<ModalImage image={imageModal} alt={altModal} display={displayModal}/>*/}

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
        </div>
    )
}

export default App
