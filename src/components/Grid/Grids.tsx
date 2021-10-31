import {useContext, useCallback, useEffect, useState } from "react";
import useGrid from "../../hooks/use-initGrid"; //custom hooks
import {computeNextGrid} from "../../helpers/GridHelpers";
import { grid, checks } from "../../models/Grid";
import { MESSAGE_GRID } from "../../helpers/Costants";
import ResultsContext from "../../store/Result-context";
import { JSX } from "../../models/ReactHelper";
import styles from "./Grid.module.css";

const Grids: React.FC<checks> = (props): JSX => {
    
  const initialisedGrid: grid = useGrid();

  const { clicked: isNewGen, disableButton} = props;
  const [grid, setGrid] = useState<grid>(initialisedGrid);
  const [count, setCount] = useState<number>(0);
  const [listGrid,setListGrid] = useState<any[]>([]);
  const computeNewGrid = useCallback((matrix2d: grid):void =>setGrid(computeNextGrid(matrix2d)),[]);
  const setCountHandler = useCallback(():void => setCount((prevCount) => prevCount + 1),[]);
  
  const ctx:any=useContext(ResultsContext);
  
  const disableButtonHandler  = useCallback(():void=>{
    const cloneGrid = grid.map(row=>[...row]);
    setListGrid(prevGrid=> [...prevGrid,cloneGrid]);
    disableButton(listGrid);
    ctx.maxIteration(count);
    // eslint-disable-next-line 
    },[disableButton,grid]);

  useEffect(() => {
    isNewGen !== undefined && setCountHandler();
    isNewGen !== undefined && computeNewGrid(grid);
    isNewGen !== undefined && disableButtonHandler();
  }, [isNewGen, grid, setCountHandler, computeNewGrid, disableButtonHandler]);
  
  return (
    <div className={styles["grid"]}>
      <div className={styles["panel-count"]}>{`${MESSAGE_GRID}: ${count}`}</div>
      <table className={styles["table-style"]}>
            <tbody>
              {grid.map((row, i, _) => {
                return (
                  <tr className={styles['table-style-tr']} key={`${i}`}>
                    {row.map((col, j, _) => {
                      return (
                        <td className={styles['table-style-td']} style={{ backgroundColor: col ? "#adf802" : "" }} key={`${j + i}`}/>); })}
                  </tr>); })}
            </tbody>
      </table>
    </div>
  );
};

export default Grids;
