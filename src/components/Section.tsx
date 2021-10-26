import Title from "./Title/Title";
import SetupGame from "./Setup/SetupGame";
import {TITLE} from '../helpers/Costants'; 



const Section:React.FC =():JSX.Element=> {
    return (
      <>
        <Title text={TITLE}/>
        <SetupGame/>
      </>
    );
};

export default Section;