import React from "react";
import styles from './TemplateGOF.module.css';

//Receive props aka JSX Elements and wrap all the content
const TemplateGOF:React.FC<{children:JSX.Element}> =(props)=>{
    return(
    <div className={styles['wrapper']}>{props.children}</div>
    );
};  

export default TemplateGOF;