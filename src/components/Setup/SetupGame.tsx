import _ from 'lodash'; 
import React,{useCallback, useEffect, useState} from "react";
import Grids from "../Grid/Grids";
import {setup} from "../../models/setup";
import { grid } from "../../models/Grid";
import ButtonAction from "../ButtonAction/ButtonAction"; 
import * as COSTANT from "../../helpers/Costants";

import styles from "../ButtonAction/ButtonAction.module.css";


const SetupGame:React.FC<setup> =(props):JSX.Element=>{
  const {getValModal}=props;
  const [isClicked, setIsClicked]=useState<boolean>();
  const [isEqual,setIsEqual]=useState<boolean>();

  const setCounterHandler = useCallback((event: Event):void => {
    // eslint-disable-next-line 
    const val:string = (event.target as HTMLInputElement).value;
    setIsClicked(val=>!val);
  },[]);
  
  

  const getValueButton=(grids:grid):void=>{
    const prevGrid = grids[grids.length-2];
    const currentGrid = grids[grids.length-1];
    if((prevGrid && currentGrid)!== undefined ){
      setIsEqual(_.isEqual(prevGrid,currentGrid));
    }

  }; 



  useEffect(()=>{
    if(isEqual!==undefined && isEqual===true ) {
        getValModal!(isEqual);
    }
  },[getValModal,isEqual]);
  


  return (
   <>
    <Grids clicked={isClicked!} disableButton={getValueButton}/>
    <ButtonAction name={COSTANT.NAME_CLICK}  type={COSTANT.TYPE_BUTTON} value={COSTANT.MESSAGE_BUTTON} disable={isEqual}
     styles={styles['pure-material-button-contained']}
     setValAction={setCounterHandler}/>
   </>
   );
};
export default React.memo(SetupGame); 