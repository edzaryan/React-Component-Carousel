import React, { useState, useRef, useEffect } from "react";
import styles from "./Slider.module.css";
import SliderItem from "../sliderItem/SliderItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SliderButton from "../SliderButton/SliderButton";


const Slider = ({ data }) => {
    const blockRef = useRef(null);
    const innerBlockRef = useRef(null);
    const [currentPosition, setCurrentPosition] = useState(0);
    const [innerBlockWidth, setInnerBlockWidth] = useState(null);
    const [blockWidth, setBlockWidth] = useState(null);

    useEffect(() => {
        if (blockRef.current && innerBlockRef.current) {
            setBlockWidth(blockRef.current.clientWidth);
            setInnerBlockWidth(innerBlockRef.current.clientWidth);
        }
    }, [data]);

    const move = direction => {
        const remainingSpaceStart = currentPosition;

        const remainingSpaceEnd = innerBlockWidth - Math.abs(currentPosition) - blockWidth;

        if (direction === "LEFT" && remainingSpaceStart < 0) {
            setCurrentPosition(prevPosition => prevPosition + Math.min(Math.abs(remainingSpaceStart), blockWidth + 20));
        }
        else if (direction === "RIGHT" && remainingSpaceEnd > 0) {
            setCurrentPosition(prevPosition => prevPosition - Math.min(remainingSpaceEnd, blockWidth + 20));
        }
    }

    return (
        <div className={styles.slider}>
            {data.length > 5 && (
                <>
                    <SliderButton style={{ left: "-25px" }} onClick={() => move("LEFT")}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </SliderButton>
                    <SliderButton style={{ right: "-25px" }} onClick={() => move("RIGHT")}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </SliderButton>
                </>
            )}
            <div className={styles.sliderBlock} ref={blockRef}>
                <div className={styles.innerBlock} style={{ transform: `translateX(${currentPosition}px)` }} ref={innerBlockRef}>
                    {
                        data.map(song => <SliderItem key={song.id} {...song} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Slider;
