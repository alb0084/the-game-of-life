import {grid} from '../models/Grid';

const useGrid=():grid=>{
    const grid: number[][] = [];
    for (let i = 0; i <= 8; i++) {
      grid[i] = [];
      for (let j = 0; j <= 8; j++) {
        grid[i][j] = Math.random() <= 0.5 ? 1 : 0;
      }
    }
    return grid;
} 

export default useGrid;