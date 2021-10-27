import React from 'react';
import {card} from '../../models/Card';

import styles from './Card.module.css';

const Card:React.FC<card> = (props):JSX.Element => {
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
};
export default Card;
