import React from "react";
import {title} from '../../models/Title';
import { JSX } from "../../models/ReactHelper";
import styles from './Title.module.css';

const Title: React.FC<title> = (props):JSX => {
  return <h2 className={styles.backgraoundTitle}>{props.text}</h2>
};

export default React.memo(Title);