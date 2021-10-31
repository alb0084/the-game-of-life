import React from "react";
import { JSX } from "../../models/ReactHelper";
import styles from './TemplateGOF.module.css';

//Receive props aka JSX Elements and wrap all the content
const TemplateGOF:React.FC<{children:JSX}> =(props):JSX=>{
    return <div className={styles['wrapper']}>{props.children}</div>
};  

export default TemplateGOF; 