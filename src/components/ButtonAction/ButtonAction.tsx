import React from "react";
import {button} from "../../models/Buttons";
import {JSX} from '../../models/ReactHelper';


const ButtonAction:React.FC<button> =(props): JSX=>{
   
  const { disable } = props;

  return (
    <div>
      <input
        onClick={props.setValAction}
        className={props?.styles}
        type={props.type}
        name={props.name}
        value={props.value}
        disabled={disable}
      />
    </div>
  );
};

export default React.memo(ButtonAction);