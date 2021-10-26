import React from "react";
import {Button} from "../../models/Buttons";


const ButtonAction:React.FC<Button> =(props): JSX.Element=>{
    const {disable}=props;
    return (
      <div>
        {/* props className Optionals */}
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