import React from "react";
import styles from "./SliderButton.module.css";

const SliderButtonModule = ({ children, style, onClick }) => {
    return (
        <div className={styles.button} style={style} onClick={onClick}>
            { children }
        </div>
    );
};

export default SliderButtonModule;