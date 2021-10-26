import React from "react";
import styles from './TemplateGOF.module.css';

//Receive props which are JSX Elements
const TemplateGOF:React.FC<{children:JSX.Element}> =(props)=>{
    return(
    <div className={styles['wrapper']}>{props.children}</div>
    );
};  

export default TemplateGOF;