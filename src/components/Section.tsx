import { useCallback, useState } from "react";
import Title from "./Title/Title";
import SetupGame from "./Setup/SetupGame";
import { TITLE } from "../helpers/Costants";
import ResultsContext from "../store/Result-context";
import Modal from "./Modal/Modal";

const Section: React.FC = (): JSX.Element => {

  const [isEnd, setIsEnd] = useState<boolean|null>(false);
  const [nRound, setNround]=useState<number>();
  const setModalHandler = useCallback((val:boolean):void=>setIsEnd(val),[]);
  const closeModalHandler = ():void=>setIsEnd(false);
  const getMaxRound = (n:number):void =>setNround((n+1));
  
  return (
    <>
      <ResultsContext.Provider value={{ maxIteration: getMaxRound, round: nRound }} >
        <Title text={TITLE} />
        <SetupGame getValModal={setModalHandler} />
        {isEnd && <Modal onConfirm={closeModalHandler} />}
      </ResultsContext.Provider>
    </>
  );
};

export default Section;
