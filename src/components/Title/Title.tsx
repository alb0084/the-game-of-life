import React from "react";
import {title} from '../../models/Title';
import styles from './Title.module.css';

const Title:React.FC<title> = (props) => {
    return(
        <>
            <h2 className={styles.backgraoundTitle}>{props.text}</h2>
        </>
    )
};

export default React.memo(Title);