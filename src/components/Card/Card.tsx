import React from 'react';
import {card} from '../../models/Card';
import {JSX} from '../../models/ReactHelper';

import styles from './Card.module.css';
const Card:React.FC<card> = (props): JSX => {
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
};
export default Card;
