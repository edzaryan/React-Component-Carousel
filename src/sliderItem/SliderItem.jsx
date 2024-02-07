import React from "react";
import styles from "./SliderItem.module.css";


const SliderItem = ({ id, songName, artistName, image, file }) => {
    return ( 
        <div className={styles.sliderItem}>
            <div className={styles.sliderItemImage} style={{ backgroundImage: `url(${image})` }} />
            <div className={styles.info}>
                <div className={styles.songName}>{songName}</div>
                <div className={styles.songAlbum}>{artistName}</div>
            </div>
        </div>
    );
};

export default SliderItem;