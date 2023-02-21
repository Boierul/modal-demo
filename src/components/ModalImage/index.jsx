import React from 'react';
import styles from './ModalImage.module.sass';


function ModalImage(props) {
    const { image, alt, display } = props;

    return (
        <div className={`${styles.container} ${styles.animation__opacity} ${display ? styles.active : ''}`}>
            <img src={image} alt={alt} />
        </div>
    );
}

export default ModalImage;